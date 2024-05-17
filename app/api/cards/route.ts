import { Card } from '@/lib/database/models/card';
import { connectToDatabase } from '@/lib/database/mongoose';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
    try {
        await connectToDatabase();

        const page = req.nextUrl.searchParams.get('page')
            ? parseInt(req.nextUrl.searchParams.get('page') || '', 15)
            : 1;
        const limit = 10; // Number of cards per page
        const skip = (page - 1) * limit;

        const cards = await Card.find().skip(skip).limit(limit);

        return NextResponse.json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error);
        return NextResponse.json({ error: 'Error fetching cards' }, { status: 500 });
    }
}

// Replace with your MongoDB URI








