import { FaEye, FaTrash, FaPencilAlt } from "react-icons/fa";

const DashboardTable = () => {
  return (
    <div className="relative flex flex-col w-full h-full py-4 shadow-md text-slate-200 bg-lightblue rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-none text-slate-200 bg-lightblue bg-clip-border">
        <h5 className="mb-6 text-xl antialiased font-semibold leading-snug tracking-normal text-slate-200">
          Recent Posts
        </h5>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full overflow-hidden md:w-max">
            <nav>
              <ul
                role="tablist"
                className="relative flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60"
              >
                <li
                  role="tab"
                  className="px-5 py-1 text-base antialiased leading-relaxed text-center rounded-md cursor-pointer bg-darkblue text-slate-200"
                >
                  All
                </li>
                <li
                  role="tab"
                  className="px-5 py-1 text-base antialiased leading-relaxed text-center bg-transparent rounded-md cursor-pointer text-slate-200"
                >
                  Published
                </li>
                <li
                  role="tab"
                  className="px-5 py-1 text-base antialiased leading-relaxed text-center bg-transparent rounded-md cursor-pointer text-slate-200"
                >
                  Unpublished
                </li>
              </ul>
            </nav>
          </div>
          <div className="relative flex items-center w-full md:w-72">
            <input
              className="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 text-sm font-normal transition-all border-2 border-slate-500 outline-0 focus:border-slate-200 focus:placeholder:text-slate-200"
              placeholder="Search Post"
            />
          </div>
        </div>
      </div>
      <div className="py-6 overflow-scroll scrollbar-hide">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr className="even:bg-amber-100 odd:bg-blue-100">
              <th className="p-4 bg-darkblue text-slate-200">Posts</th>
              <th className="p-4 bg-darkblue text-slate-200">Status</th>
              <th className="p-4 bg-darkblue text-slate-200 ">Date</th>
              <th className="p-4 bg-darkblue text-slate-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-b">
              <td className="p-4 truncate text-slate-300">
                <h5>Lorem ipsum dolor sit amet consectetur</h5>
              </td>
              <td className="p-4 border-x">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase bg-green-900 rounded-md select-none whitespace-nowrap">
                    <span className="">online</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-x">
                  23/04/18
              </td>
              <td className="flex gap-6 p-4">
                <button
                  className="h-6 text-base text-center text-slate-200"
                  type="button"
                >
                  <FaEye />
                </button>
                <button
                  className="h-6 text-base text-center text-sky-400"
                  type="button"
                >
                  <FaPencilAlt />
                </button>
                <button
                  className="h-6 text-base text-center text-red-500 "
                  type="button"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4 truncate text-slate-300">
                <h5>Lorem ipsum dolor sit amet consectetur</h5>
              </td>
              <td className="p-4 border-x">
                <div className="w-max">
                  <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase bg-green-900 rounded-md select-none whitespace-nowrap">
                    <span className="">online</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-x">
                  23/04/18
              </td>
              <td className="flex gap-6 p-4">
                <button
                  className="h-6 text-base text-center text-slate-200"
                  type="button"
                >
                  <FaEye />
                </button>
                <button
                  className="h-6 text-base text-center text-sky-400"
                  type="button"
                >
                  <FaPencilAlt />
                </button>
                <button
                  className="h-6 text-base text-center text-red-500 "
                  type="button"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-4">
        <p className="text-sm antialiased font-normal leading-normal text-blue-gray-900">
          Page 1 of 10
        </p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle border rounded-lg text-slate-200"
            type="button"
          >
            Previous
          </button>
          <button
            className="px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle border rounded-lg text-slate-200"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
