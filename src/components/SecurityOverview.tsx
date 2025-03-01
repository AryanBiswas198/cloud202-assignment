import { FaChevronRight } from "react-icons/fa";

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function SecurityOverview({ setActiveTab }: Props) {
  return (
    <div className="p-6 w-full">
      <div className="bg-[#4a5d4f] text-white text-[17px] font-semibold px-4 py-2 rounded">
        Security Overview
      </div>

      <div className="mt-6 border border-gray-200 px-5 py-8 rounded shadow-sm flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-semibold text-gray-800">Advanced Configuration</p>
          <FaChevronRight className="text-gray-600" size={16} />
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => setActiveTab("Workflows")}
          className="bg-gray-300 px-8 py-2 rounded hover:bg-gray-400 transition text-gray-800 font-medium cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveTab("Overview")}
          className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition font-medium cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
