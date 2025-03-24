import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../../app/services/profileApi";

const EditProfile = () => {
  const { data, error, isLoading } = useGetProfileQuery();

  const [editProfile, setEditProfile] = useState({
    full_name: data?.data[0].full_name,
    email: data?.data[0].email,
    headline: data?.data[0].headline,
    about_me: data?.data[0].about_me,
    address: data?.data[0].address,
    city: data?.data[0].city,
    state: data?.data[0].state,
    country: data?.data[0].country,
    zipcode: data?.data[0].zipcode,
  });

  const onProfileChange = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("full_name", editProfile.full_name);
      formData.append("email", editProfile.email);
    } catch (error) {}
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
                <label htmlFor="profile_image" className="text-base">
                  Profile Picture
                </label>
                <label
                  className="flex items-center justify-center w-full mt-2 rounded-xl h-28 bg-darkblue"
                  htmlFor="profile_image"
                >
                  <input
                    type="file"
                    name="profile_image"
                    id="profile_image"
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
                  value={editProfile?.full_name}
                  onChange={onProfileChange}
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Full Name"
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
                  value={editProfile?.email}
                  onChange={onProfileChange}
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="Email Address"
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="headline" className="text-base">
                  Headline
                </label>
                <textarea
                  name="headline"
                  id="headline"
                  rows="4"
                  placeholder="Headline"
                  value={editProfile?.headline}
                  onChange={onProfileChange}
                  className="w-full px-4 py-4 mt-2 border rounded bg-lightblue"
                ></textarea>
              </div>
              <div className="md:col-span-5">
                <label htmlFor="about_me" className="text-base">
                  About Me
                </label>
                <textarea
                  name="about_me"
                  id="about_me"
                  rows="4"
                  placeholder="About Me"
                  value={editProfile?.about_me}
                  onChange={onProfileChange}
                  className="w-full px-4 py-4 mt-2 border rounded bg-lightblue"
                ></textarea>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address" className="text-base">
                  Address / Street
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={editProfile?.address}
                  onChange={onProfileChange}
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
                  value={editProfile?.city}
                  onChange={onProfileChange}
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                  placeholder="City"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state" className="text-base">
                  State / province
                </label>
                <input
                  name="state"
                  id="state"
                  value={editProfile?.state}
                  placeholder="State"
                  onChange={onProfileChange}
                  className="w-full h-10 px-4 mt-2 border rounded bg-lightblue"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country" className="text-base">
                  Country / region
                </label>
                <input
                  name="country"
                  id="country"
                  value={editProfile?.country}
                  placeholder="Country"
                  onChange={onProfileChange}
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
                  value={editProfile?.zipcode}
                  onChange={onProfileChange}
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
      </form>
    </div>
  );
};

export default EditProfile;
