import { connection } from "@/libs/connection/dbConnection";
import generateToken from "@/libs/utils/generateTokens";
import { UserSchema } from "@/libs/utils/interfaces";
import NextUser from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connection();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const isExisting = await NextUser.findOne({ email, password });

    if (!isExisting) {
      return NextResponse.json(
        {
          message: "Invalid credentials.",
        },
        { status: 400 }
      );
    }

    const token = generateToken(isExisting);

    let response = NextResponse.json(
      {
        message: "User loggedin successfully",
        token
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
