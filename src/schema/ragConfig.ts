import { z } from "zod";

export const ragConfigSchema = z.object({
  appName: z.string().min(1, "App Name is required"),
  appDescription: z.string().min(1, "Description is required"),
  knowledgeBaseName: z.string().min(1, "Knowledge Base Name is required"),
  knowledgeBaseDescription: z.string().min(1, "Knowledge Base Description is required"),
  pattern: z.enum([
    "Contextual RAG",
    "Agentic RAG",
    "Hybrid RAG",
    "Graph RAG",
    "Self reflective RAG",
  ], { message: "Invalid Pattern" }),
  embeddings: z.enum(["256", "512", "1024"], { message: "Invalid Embedding" }),
  metrics: z.enum(["Cosine", "Dot", "Product", "Euclidean Norm"], { message: "Invalid Metric" }),
  chunking: z.enum(["Semantic", "Fixed-sized", "Recursive"], { message: "Invalid Chunking" }),
  vectorDB: z.string().min(1, "Vector DB is required"), 
});
