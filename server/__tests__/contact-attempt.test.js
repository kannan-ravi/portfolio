import mongoose from "mongoose";
import app from "../../server.js";
import jwt from "jsonwebtoken";
import request from "supertest";

// BEFORE ALL OF IT CONNECT WITH DATABASE
beforeAll(async () => {
  const mongoUri = process.env.MONGODB_URI;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// AFTER ALL OF IT CLOSE THE MONGODB CONNECTION
afterAll(async () => {
  await mongoose.connection.close();
});

const dummyData = {
  name: "",
  email: "dummy@gmail.com",
  message: "This is dummy data",
};

const correctData = {
  name: "Dummy",
  email: "dummy@gmail.com",
  message: "this is dummy data",
};

let createdId;

describe("___Contact Attempt POST Test___", () => {
  it("should not create contact attempt - as it is missing data's", async () => {
    const response = await request(app)
      .post("/api/contact-attempt/")
      .send(dummyData)
      .expect("Content-Type", /json/)
      .expect(422);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "Please fill the necessary details",
        statusCode: 422,
      })
    );
  });

  it("should create contact attempt - as it has all the data", async () => {
    const response = await request(app)
      .post("/api/contact-attempt")
      .send(correctData)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "Your message has been successfully received",
      })
    );

    createdId = response.body.data._id;
    console.log(createdId)
  });
});

describe("___Contact Attempt GET All Test___", () => {
  it("should get all contact attempt data - as the user is logged in", async () => {
    const testUser = { _id: "user123", username: "testuser" };
    let token = jwt.sign(testUser, process.env.JWT_SECRET, { expiresIn: "1h" });
    const response = await request(app)
      .get("/api/contact-attempt/")
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "Successfully Retrieved Contact",
      })
    );
  });

  it("should not get all the contact attempt data - as the user is not authorized", async () => {
    const response = await request(app)
      .get("/api/contact-attempt")
      .expect("Content-Type", /json/)
      .expect(401);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "You are not authorized",
        statusCode: 401,
      })
    );
  });
});

describe("___Contact Attempt GET One Test___", () => {
  it("should get single contact attempt data - as the user is logged in", async () => {
    const testUser = { _id: "user123", username: "testuser" };
    let token = jwt.sign(testUser, process.env.JWT_SECRET, { expiresIn: "1h" });
    const response = await request(app)
      .get(`/api/contact-attempt/${createdId}`)
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "Successfully Retrieved",
        data: expect.any(Object),
      })
    );
  });
  it("should not get single contact attempt data - as the user is not authorized", async () => {
    const response = await request(app)
      .get(`/api/contact-attempt/${createdId}`)
      .expect("Content-Type", /json/)
      .expect(401);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "You are not authorized",
        statusCode: 401,
      })
    );
  });

  it("should not get single contact attempt data - as the id is not found", async () => {
    const testUser = { _id: "user123", username: "testuser" };
    const token = jwt.sign(testUser, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const response = await request(app)
      .get("/api/contact-attempt/67879a6d81569c2b2d82db45")
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(404);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "Contact Attempt not found",
        statusCode: 404,
      })
    );
  });
});

describe("___Contact Attempt DELETE Test___", () => {
  it("should delete contact attempt data - as the user is logged in", async () => {
    const testUser = { _id: "user123", username: "testuser" };
    let token = jwt.sign(testUser, process.env.JWT_SECRET, { expiresIn: "1h" });
    const response = await request(app)
      .delete(`/api/contact-attempt/${createdId}`)
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "Successfully Deleted",
      })
    );
  });
});
