import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../dbConnect";
import Vacancy from "@/app/models/vacancy";

dbConnect();

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const lang = req.nextUrl.searchParams.get("lang");
    const vacancies = await Vacancy.find()
      .where("lang")
      .equals(lang)
      .sort({ _id: -1 });

    return NextResponse.json({ vacancies }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { title, body, lang } = await req.json();
    await Vacancy.create({ title, body, lang });
  } catch (e) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
  return NextResponse.json({ message: "Vacancy added" }, { status: 200 });
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await Vacancy.findByIdAndDelete(id);
  } catch (e) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
  return NextResponse.json({ message: "Vacancy added" }, { status: 200 });
};
