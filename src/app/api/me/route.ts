import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Teetat Yodbun",
    studentId: "660612146",
  });
};
