import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session: Session = await serverAuth(req)
  
  return NextResponse.json(session)
}