export const sumObjectValues = (obj: Record<string, any>): number => {
  return Object.values(obj).reduce(
    (sum, v) => sum + (typeof v === "number" ? v : 0),
    0
  );
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return "0";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["b", "KB", "MB", "GB", "TB", "PB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${
    sizes[i] || ""
  }`;
};

export const formatBytesToGB = (bytes: number) => {
  return parseFloat((bytes / 1024 / 1024 / 1024).toFixed(2));
};

export const formatGBToBytes = (gb: number) => {
  return gb * 1024 * 1024 * 1024;
};
