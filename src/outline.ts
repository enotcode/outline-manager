import { OutlineVPN, type DataUsagePerAccessKey } from "outlinevpn-api";
import { type AccessKey } from "./types";

const client = new OutlineVPN({
  apiUrl: process.env.OUTLINE_API_URL || "",
  fingerprint: process.env.OUTLINE_FINGERPRINT || "",
});

export const getServerInfo = async () => {
  return await client.getServer();
};

export const getKeysList = async () => {
  const keys = (await client.getAccessKeys()) as unknown;
  return (keys as { accessKeys: AccessKey[] })?.accessKeys;
};

export const getUsage = async () => {
  return (await client.getDataUsage()) as DataUsagePerAccessKey;
};

export const addKey = async (name: string) => {
  return await client.createAccessKey({ name });
};

export const removeKey = async (id: string) => {
  return await client.deleteAccessKey(id);
};

export const renameAccessKey = async (id: string, name: string) => {
  return await client.renameAccessKey(id, name);
};

export const addDataLimit = async (id: string, limit: number) => {
  return await client.addDataLimit(id, limit);
};

export const deleteDataLimit = async (id: string) => {
  return await client.deleteDataLimit(id);
};
