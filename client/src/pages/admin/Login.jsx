import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const fetchApi = useFetch();
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `auth/login`;
      const data = await fetchApi.fetchData(url, adminData);

      if (data.success === false) {
        return;
      }
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="scroll-smooth">
      <div className="font-sans bg-darkblue text-slate-300 selection:bg-cyan-500 selection:text-black">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
          <div className="px-8 py-12 rounded bg-slate-300">
            <div className="flex items-end gap-2 mb-6">
              <h2 className="text-3xl font-bold text-darkblue contact-heading">
                Login
              </h2>
              <p className="text-xs text-darkblue">Admin Only</p>
            </div>
            <form className="grid gap-4 contact-form">
              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Username"
                type="text"
                name="username"
                onChange={onChange}
                required
                autoFocus
              />

              <input
                className="px-4 py-2 bg-transparent border rounded-md text-lightblue border-lightblue placeholder:text-lightblue"
                placeholder="Password"
                type="password"
                name="password"
                onChange={onChange}
                required
              />

              <div className="flex items-center justify-end">
                <p className="text-xs border-b cursor-pointer text-lightblue text-end border-b-darkblue w-fit">
                  Forgot Password
                </p>
              </div>

              <button
                className="px-4 py-2 text-white duration-200 rounded-md bg-lightblue hover:opacity-85"
                type="submit"
                onClick={onSubmit}
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
