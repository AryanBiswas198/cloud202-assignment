import RAGConfig from "@/model/ragConfig.model";
import { ragConfigSchema } from "@/schema/ragConfig";
import { z } from "zod";

export type RAGConfigType = z.infer<typeof ragConfigSchema>;

export const createRAGConfig = async (body: RAGConfigType) => {
  const validationResult = ragConfigSchema.safeParse(body);
  if (!validationResult.success) {
    throw { status: 400, message: "Invalid data", details: validationResult.error.errors };
  }

  const newRAGConfig = await RAGConfig.create(body);
  return newRAGConfig;
};
