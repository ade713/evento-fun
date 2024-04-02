import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyles = 'className="text-white flex items-center px-5 gap-x-2 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"'

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

export function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ?
        <Link
          className={btnStyles}
          href={previousPath}
        >
          <ArrowLeftIcon />
          Previous
        </Link> :
        <div />
      }
      {nextPath ?
        <Link
          className={btnStyles}
          href={nextPath}
        >
          <ArrowRightIcon />
          Next
        </Link> :
        null
      }
    </section>
  );
}
