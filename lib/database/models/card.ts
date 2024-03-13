import mongoose, { Schema, model, models } from "mongoose";

export interface Card {
    one: string;
    two: string;
    three: string;
    four: string;
}

const CardSchema = new Schema<Card>({
    one: { type: String, required: true },
    two: { type: String, required: true },
    three: { type: String, required: true },
    four: { type: String, required: true },
});

export const Card = mongoose.models.Card || mongoose.model<Card>("Card", CardSchema)