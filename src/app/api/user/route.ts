import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../dbConnect";
import User from "@/app/models/user";

dbConnect();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, password } = await req.json();
  const user = await User.findOne({
    name,
    password,
  });

  try {
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
