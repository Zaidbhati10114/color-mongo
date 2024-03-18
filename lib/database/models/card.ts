import mongoose, { Schema, model, models } from "mongoose";

export interface Card {
    one: string;
    two: string;
    three: string;
    four: string;
    type: 'popular' | 'regular' | 'new';
}

const CardSchema = new Schema<Card>({
    one: { type: String, required: true },
    two: { type: String, required: true },
    three: { type: String, required: true },
    four: { type: String, required: true },
    type: { type: String, enum: ['popular', 'regular', 'new'] }
});

export const Card = mongoose.models.Card || mongoose.model<Card>("Card", CardSchema)