"use server";

import { addKey } from "./outline";

export const createKey = async (name: string) => {
  return await addKey(name);
};
