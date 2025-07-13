import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Tab from "@/components/ui/tab/Tab";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="px-4 sm:w-lg sm:mx-auto">
      <Hero />
      <Skills />
      <Tab />
      <div className="mt-6">
        <h2 className="w-fit rounded bg-gray-100 border border-gray-300 px-1.5 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
          Recent Projects
        </h2>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <Link href="">
            <div className="p-3 border border-gray-200 rounded hover:bg-gray-100 transition duration-300 shadow hover:shadow-md dark:border-gray-800 dark:hover:bg-gray-900">
              <Image
                src="https://picsum.dev/300/200"
                alt="Placeholder"
                width="300"
                height="200"
                className="w-full rounded"
              />
              <h3 className="text-sm font-semibold mt-2 dark:text-gray-100">
                Task Management System
              </h3>
              <p className="text-sm text-gray-600 mt-3 dark:text-gray-100">
                This is for Project Short Description.
              </p>
            </div>
          </Link>
          <Link href="">
            <div className="p-3 border border-gray-200 rounded hover:bg-gray-100 transition duration-300 shadow hover:shadow-md dark:border-gray-800 dark:hover:bg-gray-900">
              <Image
                src="https://picsum.dev/300/200"
                alt="Placeholder"
                width="300"
                height="200"
                className="w-full rounded"
              />
              <h3 className="text-sm font-semibold mt-2 dark:text-gray-100">
                Task Management System
              </h3>
              <p className="text-sm text-gray-600 mt-3 dark:text-gray-100">
                This is for Project Short Description.
              </p>
            </div>
          </Link>
        </div>

        <Link
          href=""
          className="flex gap-4 items-center mt-4 text-sm font-semibold transition duration-300 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
        >
          More Projects <FaLongArrowAltRight />
        </Link>
      </div>

      <div className="mt-6">
        <h2 className="w-fit rounded bg-gray-100 border border-gray-300 px-1.5 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
          Recent Blogs
        </h2>
        <div className="mt-4">
          <Link href="">
            <div className="hover:bg-gray-200 px-3 py-2 transition duration-300 dark:hover:bg-gray-900">
              <h3 className="text-gray-800 mb-1 dark:text-gray-200">Test Blog Post One</h3>
              <p className="text-gray-400 text-sm">Nov 18, 2024</p>
            </div>
            <div className="hover:bg-gray-200 px-3 py-2 transition duration-300 dark:hover:bg-gray-900">
              <h3 className="text-gray-800 mb-1 dark:text-gray-200">Test Blog Post Two</h3>
              <p className="text-gray-400 text-sm">Nov 18, 2024</p>
            </div>
            <div className="hover:bg-gray-200 px-3 py-2 transition duration-300 dark:hover:bg-gray-900">
              <h3 className="text-gray-800 mb-1 dark:text-gray-200">Test Blog Post Three</h3>
              <p className="text-gray-400 text-sm">Nov 18, 2024</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
