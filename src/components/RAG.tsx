"use client";
import { useForm } from "react-hook-form";

type RAGFormData = {
  knowledgeBaseName: string;
  description: string;
  pattern: string;
  embeddings: string;
  metrics: string;
  chunking: string;
  vectorDB: string;
};

type Props = {
    setActiveTab: (tab: string) => void;
  };
  

export default function RAGConfig({ setActiveTab }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<RAGFormData>();

  const onSubmit = (data: RAGFormData) => {
    console.log("RAG Config Data:", data);
  };

  return (
    <div className="p-6 w-full">
      <div className="bg-[#4a5d4f] text-white text-lg font-semibold px-4 py-2 rounded">
        RAG Configuration
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-200 p-6 mt-6 rounded shadow-sm w-full"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Knowledge Base Name</label>
          <input
            type="text"
            {...register("knowledgeBaseName", { required: "Knowledge Base Name is required" })}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            placeholder="Enter knowledge base name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <input
            type="text"
            {...register("description", { required: "Description is required" })}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            placeholder="Enter description"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Pattern</label>
            <select
              {...register("pattern")}
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            >
              <option value="">Select Pattern</option>
              <option value="Contextual RAG">Contextual RAG</option>
              <option value="Agentic RAG">Agentic RAG</option>
              <option value="Hybrid RAG">Hybrid RAG</option>
              <option value="Graph RAG">Graph RAG</option>
              <option value="Self reflective RAG">Self reflective RAG</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Embeddings</label>
            <select
              {...register("embeddings")}
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            >
              <option value="">Select Embeddings</option>
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Metrics</label>
            <select
              {...register("metrics")}
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            >
              <option value="">Select Metrics</option>
              <option value="Cosine">Cosine</option>
              <option value="Dot">Dot</option>
              <option value="Product">Product</option>
              <option value="Euclidean Norm">Euclidean Norm</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Chunking</label>
            <select
              {...register("chunking")}
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            >
              <option value="">Select Chunking</option>
              <option value="Semantic">Semantic</option>
              <option value="Fixed-sized">Fixed-sized</option>
              <option value="Recursive">Recursive</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Vector DB</label>
          <input
            type="text"
            {...register("vectorDB", { required: "Vector DB is required" })}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            placeholder="Enter Vector DB"
          />
        </div>

        <button
          type="submit"
          className="text-[#4a5d4f] border border-gray-200 bg-white px-4 py-2 rounded shadow-sm font-medium hover:bg-gray-100 transition cursor-pointer"
        >
          Add Configuration
        </button>
      </form>

      <div className="flex justify-between mt-10">
        <button
          className="bg-gray-300 px-8 py-2 rounded hover:bg-gray-400 transition text-gray-800 font-medium cursor-pointer"
          onClick={() => setActiveTab("Basic Config")} 
        >
          Previous
        </button>
        <button
          onClick={() => setActiveTab("Workflows")}
          className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition font-medium cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
