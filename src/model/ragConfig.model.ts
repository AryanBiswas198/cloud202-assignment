import mongoose, { Schema, Document } from "mongoose";

export interface IRAGConfig extends Document {
  appName: string;
  appDescription: string;
  knowledgeBaseName: string;
  knowledgeBaseDescription: string;
  pattern: string;
  embeddings: string;
  metrics: string;
  chunking: string;
  vectorDB: string;
}

const RAGConfigSchema = new Schema<IRAGConfig>(
  {
    appName: { type: String, required: true, index: true },
    appDescription: { type: String, required: true },
    knowledgeBaseName: { type: String, required: true, index: true },
    knowledgeBaseDescription: { type: String, required: true },
    pattern: { type: String, required: true },
    embeddings: { type: String, required: true },
    metrics: { type: String, required: true },
    chunking: { type: String, required: true },
    vectorDB: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.RAGConfig ||
  mongoose.model<IRAGConfig>("RAGConfig", RAGConfigSchema);
