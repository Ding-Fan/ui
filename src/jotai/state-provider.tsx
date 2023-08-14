"use client";

import { createStore, Provider } from "jotai";
import { ReactNode } from "react";

export const jotaiStore = createStore();

export const MyProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={jotaiStore}>{children}</Provider>;
};
