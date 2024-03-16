import { useEffect, useState } from "react";
import { FaEye, FaTrash, FaPencilAlt } from "react-icons/fa";

const DashboardTable = ({ contactAttemptData, staticData }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(contactAttemptData);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const filteredData = contactAttemptData.filter((data) =>
      data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchData(filteredData);
  }, [searchText, contactAttemptData]);

  return (
    <div className="relative flex flex-col w-full h-full py-4 shadow-md text-slate-200 bg-lightblue rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-none text-slate-200 bg-lightblue bg-clip-border">
        <h5 className="mb-6 text-xl antialiased font-semibold leading-snug tracking-normal text-slate-200">
          {staticData.heading}
        </h5>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full overflow-hidden md:w-max">
            <select title="" className="px-6 py-2 rounded bg-darkblue">
              <option className="bg-darkblue hover:bg-lightblue" selected>
                10
              </option>
              <option>20</option>
            </select>
          </div>
          <div className="relative flex items-center w-full md:w-72">
            <input
              className="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 text-sm font-normal transition-all border-2 border-slate-500 outline-0 focus:border-slate-200 focus:placeholder:text-slate-200"
              placeholder={staticData.placeHolder}
              value={searchText}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="py-6 overflow-scroll scrollbar-hide">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr className="even:bg-amber-100 odd:bg-blue-100">
              <th className="p-4 bg-darkblue text-slate-200">Name</th>
              <th className="p-4 bg-darkblue text-slate-200">Email</th>
              <th className="p-4 bg-darkblue text-slate-200">Message</th>
              <th className="p-4 bg-darkblue text-slate-200 ">Date</th>
            </tr>
          </thead>
          <tbody>
            {searchData.length >= 1 ? (
              searchData.map((data) => {
                return (
                  <tr key={data._id}>
                    <td className="p-4 text-slate-300">
                      <h5>{data.name}</h5>
                    </td>
                    <td className="p-4 text-slate-300">
                      <h5>{data.email}</h5>
                    </td>
                    <td className="p-4 text-slate-300">
                      <h5>{`${data.message.substring(0, 60)}...`}</h5>
                    </td>
                    <td className="p-4 text-slate-300">
                      <h5>{data.createdAt.substring(0, 10)}</h5>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-slate-300">
                  No Contact attempt Data
                </td>
              </tr>
            )}
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
