import { OutlineVPN, AccessKey, DataUsagePerAccessKey } from "outlinevpn-api";

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
