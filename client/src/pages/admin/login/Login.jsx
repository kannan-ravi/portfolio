import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../app/features/authSlice";
import { useLoginMutation } from "../../../app/services/authApi";
import {
  removeToast,
  toastError,
  toastSuccess,
} from "../../../app/features/toastSlice";
import LoadingBar from "react-top-loading-bar";
import { endLoader, startLoader } from "../../../app/features/loaderSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminData, setAdminData] = useState({});
  const [login, { isLoading, error }] = useLoginMutation();

  const loadingBarRef = useRef();
  const { isLoaderStart, isLoaderComplete } = useSelector(
    (state) => state.loader
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  useEffect(() => {
    if (isLoaderStart) {
      loadingBarRef.current.continuousStart();
    } else if (isLoaderComplete) {
      loadingBarRef.current.complete();
    }
  }, [isLoaderStart, isLoaderComplete]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeToast());

    try {
      dispatch(startLoader());
      const userData = await login(adminData).unwrap();
      dispatch(toastSuccess("Successfully Logged In"));
      dispatch(addUser(userData?.data));
      dispatch(endLoader());
      navigate("/admin");
    } catch (err) {
      if (!err.data.success) {
        dispatch(toastError(err.data.message));
      } else {
        console.log(err);
      }
    } finally {
      dispatch(endLoader());
    }
  };
  return (
    <main className="scroll-smooth">
      <LoadingBar color="#f11946" ref={loadingBarRef} />
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
          <div className="px-8 py-12 rounded bg-slate-300">
            <div className="flex items-end gap-2 mb-6">
              <h2 className="text-3xl font-bold text-darkblue contact-heading">
                Login
              </h2>
              <p className="text-xs text-darkblue">Admin Only</p>
            </div>
            <form className="grid gap-4 contact-form" onSubmit={handleSubmit}>
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Username"
                type="text"
                name="username"
                onChange={onChange}
                title="Your Username"
                required
                autoFocus
              />

              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Password"
                type="password"
                name="password"
                title="Your Password"
                onChange={onChange}
                required
              />

              <div className="flex items-center justify-end">
                <button className="text-xs border-b text-lightblue text-end border-b-darkblue w-fit">
                  Forgot Password
                </button>
              </div>

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

export default Login;
