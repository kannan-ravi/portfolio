import React from "react";
import Footer from "../components/Footer";

const BlogPost = () => {
  return (
    <main className="bg-[#0a192f] text-slate-300 selection:bg-cyan-500 selection:text-black">
      <section className="min-h-screen pt-32 pb-10 lg:pt-40">
        <div className="max-w-4xl px-4 mx-auto">
          <h1 className="text-3xl font-bold text-white">
            Some Heading Goes Here
          </h1>
          <p className="pt-4 pb-6 text-gray-400">20-12-2023</p>
          <img
            alt="Blog post illustration"
            className="object-cover w-full h-64 rounded-md"
            height="400"
            src="https://images.unsplash.com/photo-1704587344247-22470040fec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width="800"
          />
          <article className="mt-6 space-y-4">
            <p>
              Full post content goes here. This is where the entire content of
              the blog post is displayed. The content should be engaging and
              informative to the reader.
            </p>
            <p>
              Continue the blog post content here. Make sure to break up the
              content into multiple paragraphs for easy reading.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
