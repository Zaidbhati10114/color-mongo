"use client";
import { Card } from "@/components/ui/card";
import SingleCard from "./SingleCard";
import { useQuery } from "@tanstack/react-query";

const CardComp = () => {
  const { data, isLoading, isSuccess, isError } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: () => fetch("/api/card").then((res) => res.json()),
  });

  console.log(data);
  const one = "59D5E0";
  const two = "F5DD61";
  const three = "FAA300";
  const four = "F4538A";
  return (
    <div>
      {data?.map((item: any) => (
        <Card
          key={item.id}
          className="w-[250px] h-[220px] rounded border-stone-200"
        >
          <SingleCard height={24} color="007F73" loading={true} />
        </Card>
      ))}
    </div>
  );
};
export default CardComp;

{
  /* <div>
      {data?.map((item:any) => (
        <div key={item._id}>
          <h1>one: {item.one}</h1>
          <h1>two: {item.two}</h1>
          <h1>three: {item.three}</h1>
          <h1>four: {item.four}</h1>
        </div>
      ))}
    </div> */
}

// <Card className="w-[250px] h-[220px] rounded border-stone-200">
//   <SingleCard height={24} color="007F73" loading={true} />
//   <SingleCard height={20} color={two} loading={true} />
//   <SingleCard height={16} color={three} loading={true} />
//   <SingleCard height={12} color={four} loading={true} />

// </Card>

// 8URf8IqLCgfCGNTI
