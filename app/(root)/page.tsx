import CardComp from "@/components/shared/CardComp";
import RenderSampleCard from "@/components/shared/RenderSampleCard";
import { Input } from "@/components/ui/input";
import { getAllCards } from "@/lib/actions/card.actions";

interface SearchParams {
  page: number;
  // Other properties if needed
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;
  const card = await getAllCards({ page, limit });
  return (
    <>
      <div className="ml-20">
        <Input
          type="email"
          className="search"
          placeholder="Search Any Colors"
        />
        <section className="">
          <CardComp data={card} page={page} limit={limit} />
          {/* <RenderSampleCard page={page} limit={limit} /> */}
        </section>
      </div>
    </>
  );
}
