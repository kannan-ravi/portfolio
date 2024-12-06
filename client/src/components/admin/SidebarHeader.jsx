import { RiBarChartHorizontalFill, RiSearchFill } from "react-icons/ri";

const SidebarHeader = () => {
  return (
    <div className="sticky top-0 flex items-center gap-8 py-6 z-1 backdrop-blur-sm bg-darkblue/80">
      <div className="relative flex items-center gap-4 ms-20 lg:ms-20">
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
