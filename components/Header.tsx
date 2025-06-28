import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 rounded-full bg-white shadow-[0_-1px_3px_0_rgb(0_0_0_/_0.1),_0_-1px_2px_-1px_rgb(0_0_0_/_0.1)] dark:bg-black dark:shadow-gray-50">
      <nav className="px-6 py-3">
        <ul className="flex items-center gap-8">
          <li
            className="p-3 bg-white shadow-sm rounded-full hover:bg-gray-100 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-800"
            title="Github Link"
          >
            <Link href="/">
              <FaGithub className="text-2xl dark:text-white" />
            </Link>
          </li>
          <li
            className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-800"
            title="LinkedIn Link"
          >
            <Link href="">
              <FaLinkedin className="text-2xl dark:text-white" />
            </Link>
          </li>
          <li
            className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-800"
            title="Gitlabb Link"
          >
            <Link href="">
              <FaGitlab className="text-2xl dark:text-white" />
            </Link>
          </li>
          <li
            className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-800"
            title="Medium Link"
          >
            <Link href="">
              <SiMedium className="text-2xl dark:text-white" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
