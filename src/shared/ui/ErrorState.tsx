import React from "react";
type Props = {
  title: string;
  description: string;
  onRetry: () => void;
};
export const ErrorState = ({ title, description, onRetry }: Props) => {
  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={"bg-amber-700 p-2"} onClick={onRetry}>
        Попробовать снова
      </button>
    </div>
  );
};
