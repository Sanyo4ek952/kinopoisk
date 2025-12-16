"use client";
import React from "react";
import { store } from "@/shared/store/store";
import { Provider } from "react-redux";

export const ProviderContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};
