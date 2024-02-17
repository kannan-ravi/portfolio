import { RiBarChartHorizontalFill, RiSearchFill } from "react-icons/ri";

const SidebarHeader = ({ setIsOpen, isOpen }) => {
  return (
    <div className="relative flex items-center gap-8 py-6">
      <RiBarChartHorizontalFill
        className={`fixed text-5xl text-white p-2 rounded cursor-pointer z-1 duration-200 ${
          isOpen? "left-68 bg-darkblue" : "left-4"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className="relative flex items-center gap-4 ms-20 lg:ms-16">
        <input
          type="text"
          placeholder="Search"
          className="w-64 py-2 rounded text-slate-200 lg:w-80 pe-7 ps-12 placeholder:text-white bg-lightblue"
        />
        <RiSearchFill className="absolute text-xl text-slate-200 left-3" />
      </div>
    </div>
  );
};

export default SidebarHeader;
