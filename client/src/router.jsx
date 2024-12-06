import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import PageLayout from "./layouts/PageLayout";

import Home from "./pages/home/Home";
const NotFound = lazy(() => import("./NotFound"))
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogPost = lazy(() => import("./pages/blog-post/BlogPost"));
const Dashboard = lazy(() => import("./pages/admin/dashboard/Dashboard"));
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
    errorElement: <NotFound />,
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
                <Dashboard />
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
