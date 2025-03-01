type Props = {
    setActiveTab: (tab: string) => void;
  };
  
  export default function Overview({ setActiveTab }: Props) {
    return (
      <div className="p-6 w-full">
        <div className="bg-[#4a5d4f] text-white text-[17px] font-semibold px-4 py-2 rounded">
          Overview
        </div>
  
        <p className="mt-6 text-gray-800 text-[15px] font-medium">Form Overview and Submit</p>
  
        <div className="flex justify-between mt-10">
          <button
            onClick={() => setActiveTab("Security Overview")}
            className="bg-gray-300 px-8 py-2 rounded hover:bg-gray-400 transition text-gray-800 font-medium cursor-pointer"
          >
            Previous
          </button>
          <button
            className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition font-medium cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
  