import { Card } from "@/lib/database/models/card";
import { connectToDatabase } from "@/lib/database/mongoose";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    await connectToDatabase();

    try {
        const card = await Card.findById(id);
        if (!card) {
            return NextResponse.json({ message: 'Card not found' }, { status: 404 });
        }

        card.likeCount += 1;
        await card.save();

        return NextResponse.json({ likeCount: card.likeCount }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
    }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    await connectToDatabase();

    try {
        const card = await Card.findById(id);
        if (!card) {
            return NextResponse.json({ message: 'Card not found' }, { status: 404 });
        }
        await card.save();

        return NextResponse.json({ likeCount: card.likeCount }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
    }
}