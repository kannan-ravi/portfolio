import PageLayout from "./components/PageLayout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./pages/admin/Profile";
import Posts from "./pages/admin/Posts";
import EditProfile from "./pages/admin/EditProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post" element={<BlogPost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/profile/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
