import React from "react";
import { getPosterUrl } from "@/shared/lib/getPosterUrl";
import { Movies } from "@/shared/api/types";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

type Props = {
  className?: string;
} & Movies;
export const MovieCard = ({
  className,
  poster_path,
  overview,
  title,
}: Props) => {
  return (
    <div className={cn("max-w-[500px]", className)}>
      <Image
        width={500}
        height={750}
        src={getPosterUrl(poster_path)}
        alt={"sda"}
        loading="lazy"
      />
      <h2>{title}</h2>
      <div>{overview}</div>
    </div>
  );
};
