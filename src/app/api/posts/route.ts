import { NextRequest } from "next/server"

const posts = [
    {
        name: 'teja',
        age: 22
    },
    {
        name: 'sai',
        age: 16
    }
]

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value || ""
    return Response.json(token);
}


