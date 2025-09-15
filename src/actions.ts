"use server";

import { revalidatePath } from "next/cache";
import { addKey, removeKey, renameAccessKey } from "./outline";

export const createKey = async (name: string) => {
  const result = await addKey(name);
  revalidatePath("/");
  return result;
};

export const deleteKey = async (id: string) => {
  const result = await removeKey(id);
  revalidatePath("/");
  return result;
};

export const renameKey = async (id: string, name: string) => {
  const result = await renameAccessKey(id, name);
  revalidatePath("/");
  return result;
};
