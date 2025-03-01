"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { createRAGConfig, getAllRAGConfigs } from "@/lib/api/ragConfig";

const options = {
  pattern: ["Contextual RAG", "Agentic RAG", "Hybrid RAG", "Graph RAG", "Self reflective RAG"],
  embeddings: ["256", "512", "1024"],
  metrics: ["Cosine", "Dot", "Product", "Euclidean Norm"],
  chunking: ["Semantic", "Fixed-sized", "Recursive"],
};

interface RAGConfigFormData {
  appName: string;
  description: string;
  knowledgeBaseName: string;
  knowledgeBaseDescription: string;
  pattern: string;
  embeddings: string;
  metrics: string;
  chunking: string;
  vectorDB: string;
}

export default function RAGConfigForm() {
  const { register, handleSubmit, reset } = useForm<RAGConfigFormData>();
  const [loading, setLoading] = useState(false);
  const [configs, setConfigs] = useState<RAGConfigFormData[]>([]);
  const [fetching, setFetching] = useState(true);

  // Fetch all configurations on mount
  useEffect(() => {
    async function fetchData() {
      setFetching(true);
      const data = await getAllRAGConfigs();
      setConfigs(data);
      setFetching(false);
    }
    fetchData();
  }, []);

  const onSubmit = async (data: RAGConfigFormData) => {
    setLoading(true);
    const result = await createRAGConfig(data);

    if (result.success) {
      alert("Configuration saved successfully!");
      reset();
      setConfigs((prev) => [...prev, data]); // Optimistic UI update
    } else {
      alert(`Error: ${result.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6 border rounded-md">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("appName", { required: true })} placeholder="App Name" className="w-full p-2 border rounded" />
        <textarea {...register("description", { required: true })} placeholder="Description" className="w-full p-2 border rounded" />

        <input {...register("knowledgeBaseName", { required: true })} placeholder="Knowledge Base Name" className="w-full p-2 border rounded" />
        <textarea {...register("knowledgeBaseDescription", { required: true })} placeholder="Knowledge Base Description" className="w-full p-2 border rounded" />

        {(["pattern", "embeddings", "metrics", "chunking"] as const).map((field) => (
        <select key={field} {...register(field, { required: true })} className="w-full p-2 border">
            <option value="" disabled>{`Select ${field}`}</option>
            {options[field].map((option) => (
            <option key={option} value={option}>{option}</option>
            ))}
        </select>
        ))}


        <input {...register("vectorDB", { required: true })} placeholder="Vector DB" className="w-full p-2 border rounded" />

        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded" disabled={loading}>
          {loading ? "Saving..." : "Add Configuration"}
        </button>
      </form>

      {/* Display Configurations */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold">Stored Configurations</h2>
        {fetching ? (
          <p>Loading...</p>
        ) : configs.length === 0 ? (
          <p className="text-gray-500">No configurations found.</p>
        ) : (
          <ul className="space-y-3">
            {configs.map((config, index) => (
              <li key={index} className="p-3 border rounded-md">
                <h3 className="font-semibold">{config.appName}</h3>
                <p className="text-sm">{config.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
