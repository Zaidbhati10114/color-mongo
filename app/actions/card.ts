import { Card } from "@/lib/database/models/card";
import { connectToDatabase } from "@/lib/database/mongoose";

export async function getCardById(id: string) {
    try {
        await connectToDatabase();

        const card = await Card.findById(id);
        console.log(card);

        if (!card) throw new Error("Image not found");

        return JSON.parse(JSON.stringify(card));
    } catch (error) {
        console.log("Error finding the card by id", error)
    }
}