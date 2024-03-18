import { getAllCards } from "@/lib/actions/card.actions";
import { PaginationDemo } from "./PaginationDemo";

interface SampleProps {
  page: number;
  limit: number;
}

const RenderSampleCard = async ({ page, limit }: SampleProps) => {
  const card = await getAllCards({ page, limit });

  return (
    <div>
      {card?.map((cat: any) => (
        <h1 key={cat._id}>{cat.one}</h1>
      ))}
      <div className="p-4 mt-10">
        <PaginationDemo page={page} limit={page} />
      </div>
    </div>
  );
};

export default RenderSampleCard;
