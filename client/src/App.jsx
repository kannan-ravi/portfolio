import PageLayout from "./routes/PageLayout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Admin from "./pages/admin/dashboard/Admin";
import Login from "./pages/admin/login/Login";

import { Routes, Route, BrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/admin/profile/Profile";
import Posts from "./pages/admin/posts/Posts";
import EditProfile from "./pages/admin/profile/EditProfile";
import PrivateRoutes from "./routes/ProtectedRoute";
import router from "./router";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
