import { CardTest } from "@/components/CardFull";
import { getAllCards } from "@/app/actions/card";

export default async function Home({}) {
  const card = await getAllCards();
  return (
    <>
      <div className="flex mr-10justify-center flex-wrap pt-6">
        <div className="grid grid-cols-1 gap-4 sm:ml-20 md:ml-30 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 sm:justify-center md:gap-8">
          {card?.data.map((card: any) => (
            <CardTest
              key={card._id}
              one={card.one}
              two={card.two}
              three={card.three}
              four={card.four}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// import "./globals.css";

// import { Card } from "../database/models/card";
// import { connectToDatabase } from "../database/mongoose";

// export async function getAllCards() {
//     try {
//         await connectToDatabase()
//         const data = await JSON.parse(JSON.stringify(await Card.find()));

//         return { data }
//     } catch (error) {
//         console.log("Error finding cards", error);
//     }
// }

// export async function getImageById(cardId: string) {
//     try {
//         await connectToDatabase();

//         const card = await Card.findById(cardId);

//         if (!card) throw new Error("Image not found");

//         return JSON.parse(JSON.stringify(card));
//     } catch (error) {
//         console.log("Error finding the card by id", error)
//     }
// }

import { Card } from "@/components/ui/card";

interface CardProps {
  one: string;
  two: string;
  three: string;
  four: string;
}

// export const CardTest = ({ one, two, three, four }: CardProps) => {
//   return (
//     <>
//       <Card className="w-[254px] max-w-64 h-[254px] mb-10 sm:justify-center rounded border-stone-200">
//         <div style={{ backgroundColor: `#${one}` }} className={`h-24 relative`}>
//           <div className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
//             {one}
//           </div>
//         </div>

//         <div style={{ backgroundColor: `#${two}` }} className={`h-20 relative`}>
//           <div className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
//             {two}
//           </div>
//         </div>

//         <div
//           style={{ backgroundColor: `#${three}` }}
//           className={`h-16 relative`}
//         >
//           <div className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
//             {three}
//           </div>
//         </div>

//         <div
//           style={{
//             backgroundColor: `#${four}`,
//             marginBottom: "12px",
//           }}
//           className={`h-12 mb-10 relative`}
//         >
//           <div className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100">
//             {four}
//           </div>
//         </div>
//       </Card>
//     </>
//   );
// };
