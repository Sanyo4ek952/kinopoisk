import React from "react";
import { getPosterUrl } from "@/shared/lib/getPosterUrl";
import type { Movies } from "@/entities/movie/model/types";
import Image from "next/image";
import { cn } from "@/shared/lib";

type Props = {
  isPriorityImageLoading: boolean;
  className?: string;
} & Movies;
export const MovieCard = ({
  className,
  isPriorityImageLoading,
  poster_path,
  overview,
  title,
}: Props) => {
  return (
    <div className={cn("w-full space-y-3", className)}>
      <Image
        className="aspect-[2/3] w-full object-cover"
        width={500}
        height={750}
        src={getPosterUrl(poster_path)}
        alt={"sda"}
        priority={isPriorityImageLoading}
      />
      <h2>{title}</h2>
      <div>{overview}</div>
    </div>
  );
};
