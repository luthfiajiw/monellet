import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session: Session = await serverAuth(req)

    return NextResponse.json(session)
  } catch (error) {
    throw new Error("Invalid Auth");
  }
}