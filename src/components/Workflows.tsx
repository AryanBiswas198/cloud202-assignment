import { FaPlusCircle } from "react-icons/fa";

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function Workflow({ setActiveTab }: Props) {
  return (
    <div className="p-6 w-full">
      <div className="bg-[#4a5d4f] text-white text-lg font-semibold px-4 py-2 rounded">
        Workflow
      </div>

      <div className="bg-[#f0f4f8] border border-gray-200 p-6 mt-4 rounded shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Workflow</h2>
          <button className="flex items-center gap-2 text-[#4a5d4f] hover:text-[#37483f] transition border border-gray-300 bg-white px-3 py-1 rounded text-sm shadow-sm cursor-pointer">
            <FaPlusCircle size={16} />
            Add a Workflow
          </button>
        </div>
        <p className="italic text-gray-500 mt-2">No workflows</p>
      </div>

      <div className="bg-[#f0f4f8] p-4 mt-6 rounded shadow-sm">
        <textarea
          placeholder="Type @ to reference a workflow...."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition resize-none bg-white min-h-48 cursor-text"
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setActiveTab("RAG")}
          className="bg-gray-300 px-8 py-2 rounded hover:bg-gray-400 transition text-gray-800 font-medium cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveTab("Security Overview")}
          className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition font-medium cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
