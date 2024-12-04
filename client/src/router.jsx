import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./routes/AdminLayout";
import PageLayout from "./routes/PageLayout";

import Home from "./pages/home/Home";
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Admin = lazy(() => import("./pages/admin/dashboard/Admin"));
const Posts = lazy(() => import("./pages/admin/posts/Posts"));
const Profile = lazy(() => import("./pages/admin/profile/Profile"));
const EditProfile = lazy(() => import("./pages/admin/profile/EditProfile"));
const Login = lazy(() => import("./pages/admin/login/Login"));
const ContactAttempts = lazy(() =>
  import("./pages/admin/contact-attempts/ContactAttempts")
);
const ViewContactAttempts = lazy(() =>
  import("./pages/admin/contact-attempts/ViewContactAttempts")
);
const LoginDetails = lazy(() =>
  import("./pages/admin/login-details/LoginDetails")
);

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
        element: (
          <Suspense>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/post",
        element: (
          <Suspense>
            <BlogPost />
          </Suspense>
        ),
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
            element: (
              <Suspense fallback="loading...">
                <Admin />
              </Suspense>
            ),
          },
          {
            path: "/admin/posts",
            element: (
              <Suspense>
                <Posts />
              </Suspense>
            ),
          },
          {
            path: "/admin/profile",
            element: (
              <Suspense>
                <Profile />
              </Suspense>
            ),
          },
          {
            path: "/admin/profile/edit",
            element: (
              <Suspense>
                <EditProfile />
              </Suspense>
            ),
          },
          {
            path: "/admin/login-details",
            element: (
              <Suspense>
                <LoginDetails />
              </Suspense>
            ),
          },
          {
            path: "/admin/contact-attempts",
            element: (
              <Suspense>
                <ContactAttempts />
              </Suspense>
            ),
          },
          {
            path: "/admin/contact-attempts/:id",
            element: (
              <Suspense>
                <ViewContactAttempts />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
]);

export default router;
