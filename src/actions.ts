"use server";

import { revalidatePath } from "next/cache";
import { addKey, removeKey } from "./outline";

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
