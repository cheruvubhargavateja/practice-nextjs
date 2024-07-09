import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
    const token = req.cookies.get("token")?.value || null;

    if(token){
        const res = NextResponse.json({message: 'Successfully logged out!'}, {
            status: 200
        })

        res.cookies.set("token", "", {
            expires: new Date(0),
            httpOnly: true
        })

        return res;
    }
    return Response.json({message: "Failed to logout", success: false}, {status: 401});
}