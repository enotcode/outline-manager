import copy from "copy-to-clipboard";

import { type AccessKey } from "../types";
import { toast } from "../ui/toast";

export const useShareKey = (selectedKey: AccessKey | null) => {
  const shareKey = () => {
    if (!selectedKey) return toast.error("Key not found");
    copy(selectedKey.accessUrl);
    toast.success("Link copied to clipboard");
  };

  return {
    shareKey,
  };
};
