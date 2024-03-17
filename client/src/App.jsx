import { RouterProvider } from "react-router-dom";

import router from "./router";
import Toast from "./components/Toast";
function App() {
  return (
    <>
      <Toast />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
