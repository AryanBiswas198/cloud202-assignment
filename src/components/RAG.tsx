"use client";
import { createRAGConfig, getAllRAGConfigs } from "@/lib/api/ragConfig";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type RAGFormData = {
  knowledgeBaseName: string;
  knowledgeBaseDescription: string;
  pattern: string;
  embeddings: string;
  metrics: string;
  chunking: string;
  vectorDB: string;
};

export interface RAGConfigFormData {
  appName?: string;
  appDescription?: string;
  knowledgeBaseName: string;
  knowledgeBaseDescription: string;
  pattern: string;
  embeddings: string;
  metrics: string;
  chunking: string;
  vectorDB: string;
}

type Props = {
  setActiveTab: (tab: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  basicConfigData: any;
  setBasicConfigData: (data: FormData) => void;
  setRagData: (data: RAGConfigFormData) => void;
};

export default function RAGConfig({
  setActiveTab,
  basicConfigData,
  setBasicConfigData,
  setRagData,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RAGFormData>();

  const [configurations, setConfigurations] = useState<RAGConfigFormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const loadConfigurations = async () => {
      try {
        const data = await getAllRAGConfigs();
        setConfigurations(data);
      } catch (error) {
        toast.error(`Failed to load configurations, ${error}`);
      } finally {
        setLoading(false);
      }
    };

    loadConfigurations();
  }, [refresh]); 

  const onSubmit = async (ragData: RAGFormData) => {
    if (!basicConfigData || Object.keys(basicConfigData).length === 0) {
      toast.error("Basic Configuration is required before proceeding!");
      return;
    }

    const finalData: RAGConfigFormData = { ...basicConfigData, ...ragData };
    setRagData(finalData);

    const result = await createRAGConfig(finalData);
    if (result.success) {
      toast.success("Configuration saved successfully!");
      setRefresh((prev) => !prev); 
    } else {
      toast.error(`Error: ${result.message}`);
    }

    if (typeof setBasicConfigData === "function") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setBasicConfigData({} as any);
    }
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
          <label className="block text-gray-700 font-medium mb-1">
            Knowledge Base Name
          </label>
          <input
            type="text"
            {...register("knowledgeBaseName", {
              required: "Knowledge Base Name is required",
            })}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            placeholder="Enter knowledge base name"
          />
          {errors.knowledgeBaseName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.knowledgeBaseName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <input
            type="text"
            {...register("knowledgeBaseDescription", {
              required: "Description is required",
            })}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            placeholder="Enter description"
          />
          {errors.knowledgeBaseDescription && (
            <p className="text-red-500 text-sm mt-1">
              {errors.knowledgeBaseDescription.message}
            </p>
          )}
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">
              Pattern
            </label>
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
            <label className="block text-gray-700 font-medium mb-1">
              Embeddings
            </label>
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
            <label className="block text-gray-700 font-medium mb-1">
              Metrics
            </label>
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
            <label className="block text-gray-700 font-medium mb-1">
              Chunking
            </label>
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
          <label className="block text-gray-700 font-medium mb-1">
            Vector DB
          </label>
          <input
            type="text"
            {...register("vectorDB", { required: "Vector DB is required" })}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            placeholder="Enter Vector DB"
          />
          {errors.vectorDB && (
            <p className="text-red-500 text-sm mt-1">
              {errors.vectorDB.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition font-medium cursor-pointer"
        >
          Add Configuration
        </button>
        <div className="mt-10">
          {loading ? (
            <p>Loading configurations...</p>
          ) : configurations.length > 0 ? (
            <div className="overflow-x-auto border border-gray-100 rounded-lg">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-100 text-gray-400 text-sm border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-2">KB Name</th>
                    <th className="text-left px-4 py-2">Description</th>
                    <th className="text-left px-4 py-2">Pattern</th>
                    <th className="text-left px-4 py-2">Embeddings</th>
                    <th className="text-left px-4 py-2">Metrics</th>
                    <th className="text-left px-4 py-2">Chunking</th>
                    <th className="text-left px-4 py-2">Vector DB</th>
                  </tr>
                </thead>
                <tbody>
                  {configurations.map((config, index) => (
                    <tr
                      key={index}
                      className="border-b text-sm border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-2">{config.knowledgeBaseName}</td>
                      <td className="px-4 py-2">
                        {config.knowledgeBaseDescription}
                      </td>
                      <td className="px-4 py-2">{config.pattern}</td>
                      <td className="px-4 py-2">{config.embeddings}</td>
                      <td className="px-4 py-2">{config.metrics}</td>
                      <td className="px-4 py-2">{config.chunking}</td>
                      <td className="px-4 py-2">{config.vectorDB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No configurations saved yet.</p>
          )}
        </div>
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
