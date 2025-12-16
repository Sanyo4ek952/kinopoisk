import React from "react";
type Props = {
  title: string;
  description: string;
};
export const EmptyState = ({ title, description }: Props) => {
  return (
    <div>
      <div
        className={"w-full h-full flex flex-col items-center justify-center"}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
