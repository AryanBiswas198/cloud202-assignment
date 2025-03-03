import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    return Response.json({ message: "Connected to MongoDB" });
  } catch (error) {
    return NextResponse.json({ message: "Database connection failed", error }, { status: 500 });
  }
}
