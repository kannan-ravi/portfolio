import { useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <section className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-slate-200">Recent Posts</h2>
            <p className="text-sm text-slate-500">
              Check your recent posts below...
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-lightblue">
              <Link
                rel="noopener noreferrer"
                to="/post"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/post"
                  className="text-xs uppercase hover:underline hover:underline-offset-4 text-slate-200"
                >
                  Category
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold text-slate-200">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-slate-500">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-lightblue">
              <Link
                rel="noopener noreferrer"
                to="/post"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?2"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/post"
                  className="text-xs uppercase hover:underline hover:underline-offset-4 text-slate-200"
                >
                  Category
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold text-slate-200">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-slate-500">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-lightblue">
              <Link
                rel="noopener noreferrer"
                to="/post"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?3"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/post"
                  className="text-xs uppercase hover:underline hover:underline-offset-4 text-slate-200"
                >
                  Category
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold text-slate-200">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-slate-500">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-lightblue">
              <Link
                rel="noopener noreferrer"
                to="/post"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?4"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/post"
                  className="text-xs uppercase hover:underline hover:underline-offset-4 text-slate-200"
                >
                  Category
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold text-slate-200">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-slate-500">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
