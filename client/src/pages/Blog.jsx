import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  return (
    <main className="bg-[#0a192f] text-slate-300 selection:bg-cyan-500 selection:text-black">
      <section className="min-h-screen pt-32 pb-10 lg:pt-40">
        <div className="max-w-4xl px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center">Blog</h2>
          <div className="mt-10 space-y-6 lg:mt-14 ">
            <div>
              <Link to="/post" className="text-xl font-bold">
                Some Heading Goes Here
              </Link>
              <p className="my-2 text-gray-400">20-12-2023</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                et unde animi magni sequi repellat corporis distinctio natus
                dicta nobis ab, ratione dolor atque minus ipsa voluptates neque
                quos at sit ex delectus, obcaecati ullam. Reprehenderit quas
                dolorum quam pariatur!
              </p>
              <Link
                to="/post"
                className="mt-6 px-3 py-0.5 text-xs font-semibold border rounded-full w-fit border-cyan-200 text-cyan-200 bg-gradient-to-r from-cyan-700 to-cyan-900  duration-200 cursor-pointer flex items-center gap-3"
              >
                Read more <FaArrowAltCircleRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
