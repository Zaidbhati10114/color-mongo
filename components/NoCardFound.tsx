import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NoCardFound = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/no-card.svg" height={500} width={500} alt="nocard" />
      <p className="text-muted-foreground text-2xl mt-2">
        Oops! No Cards Found
        <br />
        Please Refresh the page!
      </p>
      <div className="mt-6">
        <Button onClick={() => router.push("/")} size="lg">
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default NoCardFound;
