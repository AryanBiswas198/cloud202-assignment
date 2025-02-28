import RAGConfig from "@/model/ragConfig.model";

export async function getAllRAGConfigs() {
  return await RAGConfig.find();
}
