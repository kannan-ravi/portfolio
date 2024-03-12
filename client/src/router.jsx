import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/Blog";
import AdminLayout from "./routes/AdminLayout";
import Admin from "./pages/admin/dashboard/Admin";
import Posts from "./pages/admin/posts/Posts";
import Profile from "./pages/admin/profile/Profile";
import EditProfile from "./pages/admin/profile/EditProfile";
import PageLayout from "./routes/PageLayout";
import Login from "./pages/admin/login/Login";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./routes/ProtectedRoute";
import ContactAttempts from "./pages/admin/contact-attempts/ContactAttempts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/post",
        element: <BlogPost />,
      },
    ],
  },

  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        errorElement: <div>Not Found</div>,
        children: [
          {
            path: "",
            element: <Admin />,
          },
          {
            path: "/admin/posts",
            element: <Posts />,
          },
          {
            path: "/admin/profile",
            element: <Profile />,
          },
          {
            path: "/admin/profile/edit",
            element: <EditProfile />,
          },
          {
            path: "/admin/contact-attempts",
            element: <ContactAttempts />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
