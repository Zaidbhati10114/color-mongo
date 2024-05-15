import { Card } from "@/lib/database/models/card";
import { connectToDatabase } from "@/lib/database/mongoose";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase()
        const card = await Card.findByIdAndUpdate(
            params.id,
            { $inc: { likeCount: 1 } },
            { new: true }
        );
        if (!card) {
            return NextResponse.json({ error: 'Card not found' }, { status: 404 });
        }
        revalidatePath(`/cards/${params.id}`)
        return NextResponse.json(card);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}