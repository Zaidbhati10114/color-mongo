import { Card } from '@/lib/database/models/card';
import { connectToDatabase } from "@/lib/database/mongoose";
import { NextResponse } from "next/server";

import { MongoClient } from "mongodb";

const dbName = 'color-pallete-prod'
export async function GET(req: Request) {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URL!);
        const db = client.db(dbName);
        const url = new URL(req.url);
        const colorPalette = url.searchParams.get('color_pallete')

        if (colorPalette) {
            // console.log(colorPalette)q
            // Handle color palette search
            const result = await db.collection('search_colors').find({ pallete_type: colorPalette }).toArray();

            if (!result) {
                return NextResponse.json({ error: 'Color palette not found' }, { status: 404 });
            }

            return NextResponse.json(result);
        } else {
            // Handle other existing functionality or return an error if no search parameter is provided
            return NextResponse.json({ error: 'Please provide a color_pallete search parameter' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
}