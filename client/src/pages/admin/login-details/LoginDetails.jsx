import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useChangePasswordMutation } from "../../../app/services/authApi";
import {
  removeToast,
  toastError,
  toastSuccess,
} from "../../../app/features/toastSlice";
import { endLoader, startLoader } from "../../../app/features/loaderSlice";

const LoginDetails = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [inputValue, setInputValue] = useState({
    username: currentUser.username,
    current_password: "",
    new_password: "",
  });
  const dispatch = useDispatch();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeToast());

    if (inputValue.current_password || inputValue.new_password) {
      try {
        dispatch(startLoader());
        const userData = await changePassword(inputValue).unwrap();
        dispatch(toastSuccess(userData.message));
        setInputValue({
          username: currentUser.username,
          current_password: "",
          new_password: "",
        });
      } catch (err) {
        if (!err.data.success) {
          dispatch(toastError(err.data.message));
        } else {
          console.log(err);
        }
      } finally {
        dispatch(endLoader());
      }
    } else {
      dispatch(toastError("Please Enter Your Current & New Password"));
    }
  };

  return (
    <main className="scroll-smooth">
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        <div className="flex flex-col items-center justify-center px-4 py-10 h-[calc(100vh-176px)]">
          <div className="px-8 py-12 rounded bg-slate-300">
            <div className="flex items-end gap-2 mb-6">
              <h2 className="text-3xl font-bold text-darkblue contact-heading">
                Reset Your Password
              </h2>
            </div>
            <form className="grid gap-4 contact-form" onSubmit={handleSubmit}>
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue disabled:opacity-60"
                placeholder="Username"
                type="text"
                name="username"
                title="Username cannot be changed"
                value={inputValue.username}
                disabled
              />

              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Your Current Password"
                type="password"
                name="current_password"
                title="Your Current Password"
                onChange={handleChange}
                value={inputValue.current_password}
                autoFocus
                required
              />
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Your New Password"
                type="password"
                name="new_password"
                title="Your New Password"
                onChange={handleChange}
                value={inputValue.new_password}
                required
              />

              <button
                className="px-4 py-2 text-white duration-200 rounded-md bg-lightblue hover:opacity-85"
                type="submit"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginDetails;
