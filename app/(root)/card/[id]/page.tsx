import CardComp from "@/components/shared/CardComp";
import CardIdPage from "@/components/shared/CardIdPage";
import RelevantPallets from "@/components/shared/RelevantPallets";
import RgbValues from "@/components/shared/RgbValues";
import { getImageById } from "@/lib/actions/card.actions";

const Page = async ({ params: { id } }: SearchParamProps) => {
  const card = await getImageById(id);

  return (
    <>
      <div className="">
        {/* CardId Page */}
        <CardIdPage card={card} />
      </div>
      <div className="p-4">
        <RgbValues card={card} />
      </div>
      <RelevantPallets />
    </>
  );
};

export default Page;
