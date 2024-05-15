import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EmptyCard = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/no-data.svg" height={500} width={500} alt="Empty" />
      <p className="text-muted-foreground text-2xl mt-2">
        Oops! Sorry, We dont have your favorite color pallete yet.
      </p>
      <div className="mt-6">
        <Button onClick={() => router.push("/")} size="lg">
          Home
        </Button>
      </div>
    </div>
  );
};

export default EmptyCard;
