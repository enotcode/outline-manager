"use server";

import { addKey, removeKey } from "./outline";

export const createKey = async (name: string) => {
  return await addKey(name);
};

export const deleteKey = async (id: string) => {
  return await removeKey(id);
};
