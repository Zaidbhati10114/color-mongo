
import { Card } from "@/lib/database/models/card";
import { connectToDatabase } from "@/lib/database/mongoose";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase();
        const { id } = req.query
        const cardData = await Card.findById(id as string);
        if (!cardData) {
            return res.status(404).json({ error: 'Cart not Found' })
        }
        return res.status(200).json(cardData)

    } catch (error) {
        console.log('Error fetching cards', error)
    }
}