import { connection } from "@/libs/connection/dbConnection";
import { UserSchema } from "@/libs/utils/interfaces";
import NextUser from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connection();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = UserSchema.safeParse(body);
    const { username, email, password } = body;

    if (result.success) {
      const isExisting = await NextUser.findOne({ email });

      if (isExisting) {
        return NextResponse.json(
          {
            message: "User is already existing with this email.",
          },
          { status: 400 }
        );
      }

      const newUser = new NextUser({
        username,
        email,
        password,
      });
      await newUser.save();

      return NextResponse.json(
        {
          message: "User registered successfully",
        },
        { status: 201 }
      );
    }

    // If validation errors, map them into an object
    const serverErrors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    );

    // Respond with a JSON object containing the validation errors
    return NextResponse.json({ errors: serverErrors }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
