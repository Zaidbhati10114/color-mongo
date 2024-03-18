import { Card } from "@/lib/database/models/card";
import { connectToDatabase } from "@/lib/database/mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export async function GET(req: NextApiRequest) {
    try {
        await connectToDatabase();
        const cardData = await Card.find({ type: "Popular" });
        return NextResponse.json(cardData);

    } catch (error) {
        console.log('Error fetching cards', error)
    }
}