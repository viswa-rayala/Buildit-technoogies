import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Application from "../../../models/Application";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Basic validation
    if (!body.email || !body.fullName || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const application = await Application.create(body);
    
    return NextResponse.json(
      { success: true, data: application },
      { status: 201 }
    );
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { success: false, error: messages.join(", ") },
        { status: 400 }
      );
    }

    console.error("Error submitting application:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
