import { RAGConfigFormData } from "@/components/RAGConfigForm";

export const createRAGConfig = async (data: RAGConfigFormData) => {
    try {
      const response = await fetch("/api/rag-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) throw new Error("Failed to save configuration");
  
      return { success: true };
    } catch (error) {
      console.error("Error:", error);
      return { success: false, message: (error as Error).message };
    }
  };
  
export const getAllRAGConfigs = async () => {
    try {
      const response = await fetch("/api/rag-config");
  
      if (!response.ok) throw new Error("Failed to fetch configurations");
  
      const result = await response.json();
      console.log("Fetched data:", result); 
  
      return Array.isArray(result.data) ? result.data : []; 
    } catch (error) {
      console.error("Error fetching RAG Configs:", error);
      return [];
    }
  };
  