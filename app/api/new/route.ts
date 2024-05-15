import { Card } from "@/lib/database/models/card";
import { connectToDatabase } from "@/lib/database/mongoose";
import { NextResponse } from "next/server";

const colorPallete = true;

export async function GET(req: Request) {
    try {
        await connectToDatabase();
        if (colorPallete) {
            const result = await Card.find({ type: "new" });

            if (!result) {
                return NextResponse.json(
                    { error: "Color palette not found" },
                    { status: 404 }
                );
            }

            return NextResponse.json(result);
        } else {
            // Handle other existing functionality or return an error if no search parameter is provided
            return NextResponse.json(
                { error: "Please provide a color_pallete search parameter" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
}
