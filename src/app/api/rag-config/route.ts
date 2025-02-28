import dbConnect from "@/lib/dbConnect";
import { createRAGConfig } from "@/controllers/create.ragConfig.controller";
import { getAllRAGConfigs } from "@/controllers/get.ragConfigs.controller";

export async function GET() {
    await dbConnect();
    try {
      const configs = await getAllRAGConfigs();
      return Response.json({ success: true, data: configs }, { status: 200 });
    } catch (error) {
      return Response.json(
        { success: false, message: "Failed to fetch RAG configurations", error },
        { status: 500 }
      );
    }
  }


export async function POST(req: Request) {
    await dbConnect();
    try {
        const body = await req.json();
        const newRAGConfig = await createRAGConfig(body);
        return Response.json(
        { message: "RAG Configuration saved successfully", data: newRAGConfig },
        { status: 201 }
        );
    } catch (error: any) {
        console.error("Error saving RAG Config:", error);
        return Response.json(
        { error: error.message || "Internal Server Error", details: error.details || null },
        { status: error.status || 500 }
        );
    }
}
