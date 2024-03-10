import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  authFailure,
  authSuccess,
  authenticating,
} from "../../../store/features/authSlice";
import Toast from "../../../components/Toast";

const Login = () => {
  const { fetchData } = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminData, setAdminData] = useState({});
  const [toastVisible, setToastVisible] = useState(false);
  const { isLoading, isError, isSuccess } = useSelector((state) => state.auth);

  const onChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(authenticating());
      const url = `auth/login`;
      const data = await fetchData(url, adminData);

      if (data.success === false) {
        dispatch(authFailure(data));
        setToastVisible(true);
        return;
      }
      dispatch(authSuccess(data.data));
      setToastVisible(true);
      navigate("/admin");
    } catch (error) {
      dispatch(authFailure(error));
    }
  };
  return (
    <main className="scroll-smooth">
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        <Toast
          toastVisible={toastVisible}
          message={
            isError.success === false
              ? isError.message
              : "Logged In Successfully"
          }
          isError={isError.success === false}
          isSuccess={isSuccess}
          setToastVisible={setToastVisible}
        />
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
