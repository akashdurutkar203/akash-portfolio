import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Message from "@/models/Message";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Connect to database via Mongoose cached client
    await dbConnect();

    // Create and save message record
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { success: true, messageId: newMessage._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database connection/write error:", error);

    // Mongoose validation errors handling
    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map((val) => val.message);
      return NextResponse.json(
        { error: errorMessages.join(". ") },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error. Failed to save contact message." },
      { status: 500 }
    );
  }
}
