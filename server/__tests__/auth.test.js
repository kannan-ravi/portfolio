import mongoose from "mongoose";
import app from "../../server.js";
import request from "supertest";
import jwt from "jsonwebtoken";

// BEFORE ALL OF IT CONNECT WITH DATABASE
beforeAll(async () => {
  const mongoUri = process.env.MONGODB_URI;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// AFTER EVERYTHING CLOSE THE MONGODB CONNECTION
afterAll(async () => {
  await mongoose.connection.close();
});

// DATA FOR TESTING
const correctCredentials = {
  username: "kannan-ravi",
  password: "kannan",
};
const incorrectUsername = {
  username: "no-username",
  password: "kannan",
};
const incorrectPassword = {
  username: "kannan-ravi",
  password: "no-password",
};
const incorrectCPUsername = {
  username: "kannan",
  current_password: "kannan",
  new_password: "kannan",
};
const incorrectCPPassword = {
  username: "kannan-ravi",
  current_password: "kannan-ravi",
  new_password: "kannan",
};
const correctChangePassword = {
  current_password: "kannan",
  new_password: "kannan",
  username: "kannan-ravi",
};

// AUTHENTICATION LOGIN TEST
describe("___Auth Test___", () => {
  it("should logged in - as it is valid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(correctCredentials)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "Logged in Successfully",
        data: expect.any(Object),
      })
    );
  });

  it("should not login - as it username is incorrect", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(incorrectUsername)
      .expect("Content-Type", /json/)
      .expect(404);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "Incorrect Credentials",
      })
    );
  });

  it("should not login - as it password is incorrect", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(incorrectPassword)
      .expect("Content-Type", /json/)
      .expect(401);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "Incorrect Credentials",
      })
    );
  });
});

describe("___Auth Password Change___", () => {
  const testUser = { _id: "user123", username: "testuser" };
  let token = jwt.sign(testUser, process.env.JWT_SECRET, { expiresIn: "1h" });
  it("should not change password - as the username is invalid", async () => {
    const response = await request(app)
      .patch("/api/auth/password-change")
      .send(incorrectCPUsername)
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(404);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "Couldn't find the user",
      })
    );
  });
  it("should not change password - as the current_password is wrong", async () => {
    const response = await request(app)
      .patch("/api/auth/password-change")
      .send(incorrectCPPassword)
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(401);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: "Incorrect Credentials",
      })
    );
  });
  it("should change password - as it is valid credentials", async () => {
    const response = await request(app)
      .patch("/api/auth/password-change")
      .send(correctChangePassword)
      .set("Cookie", `token=${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "Password changed",
        data: null,
      })
    );
  });
});
