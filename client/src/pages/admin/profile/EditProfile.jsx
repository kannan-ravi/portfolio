import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

import { Link } from "react-router-dom";

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-full px-10 py-20 font-sans">
      <form
        className="flex flex-col gap-20 p-4 px-4 mb-6 rounded shadow-lg bg-lightblue md:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-4 text-sm gap-y-6 lg:grid-cols-3">
          <div className="text-slate-200">
            <p className="text-lg font-medium">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2 text-slate-200">
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-5 gap-y-8">
              <div className="md:col-span-3">
                <label htmlFor="logo_image" className="text-base">
                  Upload Logo
                </label>
                <label
                  className="flex items-center justify-center w-full mt-2 rounded-xl h-28 bg-darkblue"
                  htmlFor="logo_image"
                >
                  <input
                    type="file"
                    name="logo_image"
                    id="logo_image"
                    className="hidden w-full h-10 py-4 mt-2bg-lightblue"
                    placeholder="Full Name"
                  />
                  <FaFileUpload className="text-4xl " />
                </label>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="logo_image" className="text-base">
                  Profile Picture
                </label>
                <label
                  className="flex items-center justify-center w-full mt-2 rounded-xl h-28 bg-darkblue"
                  htmlFor="logo_image"
                >
                  <input
                    type="file"
                    name="logo_image"
                    id="logo_image"
                    className="hidden w-full h-10 py-4 mt-2bg-lightblue"
                    placeholder="Full Name"
                  />
                  <FaFileUpload className="text-4xl " />
                </label>
              </div>
              <div className="md:col-span-5">
                <label htmlFor="full_name" className="text-base">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Full Name"
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="username" className="text-base">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Username"
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email" className="text-base">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Email Address"
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="description" className="text-base">
                  Descripton
                </label>
                <textarea
                  name="description"
                  id=""
                  rows="4"
                  placeholder="Description"
                  className="w-full px-4 py-4 mt-2 border rounded bg-lightblue"
                ></textarea>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="password" className="text-base">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Password"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="confirm_password" className="text-base">
                  Confirm Password
                </label>
                <input
                  type="text"
                  name="confirm_password"
                  id="confirm_password"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Confirm Your Password"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address" className="text-base">
                  Address / Street
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Address / Street"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city" className="text-base">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="City"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country" className="text-base">
                  Country / region
                </label>
                <input
                  name="country"
                  id="country"
                  placeholder="Country"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state" className="text-base">
                  State / province
                </label>
                <input
                  name="state"
                  id="state"
                  placeholder="State"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode" className="text-base">
                  Zipcode
                </label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Zipcode"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-right md:col-span-5">
          <div className="inline-flex items-end">
            <button className="px-6 py-3 font-semibold tracking-widest text-white uppercase duration-200 rounded bg-darkblue hover:translate-y-1">
              Submit
            </button>
          </div>
        </div>
        <small className="w-100 text-slate-200">
          Make sure you enter your password correctly.
        </small>
      </form>
    </div>
  );
};

export default EditProfile;
