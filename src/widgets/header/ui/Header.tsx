import React from "react";

export const Header = () => {
  return (
    <div
      className={
        "flex items-center justify-between px-8 py-2 min-h-[60px] gap-4"
      }
    >
      <h1 className={"text-2xl font-bold text-amber-700"}>Кинопоиск</h1>
      <button>Войти</button>
    </div>
  );
};
