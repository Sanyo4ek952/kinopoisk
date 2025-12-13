"use client";
import { useGetMoviesQuery } from "@/shared/api/getMoviesApi";
import Image from "next/image";
import { getPosterUrl } from "@/shared/lib/getPosterUrl";

export default function Home() {
  const { data, isLoading } = useGetMoviesQuery({
    type: "now_playing",
    page: 2,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("data", data.results);
  return (
    <div>
      Home Page
      <Image
        width={500}
        height={500}
        src={getPosterUrl(data.results[0].poster_path)}
        alt={"sda"}
      />
    </div>
  );
}
