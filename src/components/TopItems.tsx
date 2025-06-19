"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  param: string;
};

const TopItems = ({ title, param }: Props) => {
  const genre = usePathname().split("/")[2];
  return (
    <div>
      <Link
        className={`hover:text-red-500 font-semibold  ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg"
            : ""
        }`}
        href={`/top/${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default TopItems;
