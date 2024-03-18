import { Card } from "../database/models/card";
import { connectToDatabase } from "../database/mongoose";


export async function getAllCards({ page = 1, limit = 5 }: { page?: number, limit?: number }) {
    try {
        await connectToDatabase();
        const skip = (page - 1) * limit

        const cards = await Card.find({}).limit(limit).skip(skip);

        if (!cards || cards.length === 0) {
            throw new Error("No cards found");
        }

        return JSON.parse(JSON.stringify(cards));
    } catch (error) {
        console.log("Error finding cards", error);
    }
}

export async function getImageById(cardId: string) {
    try {
        await connectToDatabase();

        const card = await Card.findById(cardId);

        if (!card) throw new Error("Image not found");

        return JSON.parse(JSON.stringify(card));
    } catch (error) {
        console.log("Error finding the card by id", error)
    }
}