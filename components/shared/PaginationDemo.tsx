import Link from "next/link";
import { Button } from "../ui/button";
import clsx from "clsx";

interface SamplePageProps {
  page: number;
  limit: number;
}

export function PaginationDemo({ page, limit }: SamplePageProps) {
  return (
    <div className="p-2">
      <Button className="mr-2">
        <Link
          className={clsx(page <= 1 && "pointer-events-none opacity-50")}
          href={`/?page=${page > 1 ? page - 1 : 1}`}
        >
          Previous
        </Link>
      </Button>
      <Button className="mr-2">
        <Link href={`/?page=${page + 1}`}>Next</Link>
      </Button>
    </div>
  );
}
