import { NextResponse } from "next/server";

function invalidAuthResponse() {
  return NextResponse.json({
    error: {
      message: "invalid authorization"
    }
  }, { status: 401 })
}

export {
  invalidAuthResponse
}