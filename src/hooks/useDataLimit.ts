import { useState, useCallback, useEffect } from "react";
import { type AccessKey } from "outlinevpn-api";

import { toast } from "../ui/toast";

import { formatBytesToGB, formatGBToBytes } from "../helpers";
import { setLimit, deleteLimit } from "../actions";

export const useDataLimit = (selectedKey: AccessKey | null) => {
  const initialLimit = selectedKey?.dataLimit?.bytes;
  const [isEnabled, setIsEnabled] = useState(!!initialLimit);
  const [limitGB, setLimitGB] = useState(
    initialLimit ? formatBytesToGB(initialLimit) : 0
  );

  useEffect(() => {
    const currentLimit = selectedKey?.dataLimit?.bytes;
    setIsEnabled(!!currentLimit);
    setLimitGB(currentLimit ? formatBytesToGB(currentLimit) : 0);
  }, [selectedKey?.dataLimit?.bytes]);

  const toggleEnabled = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
  }, []);

  const updateLimit = useCallback((gb: number) => {
    setLimitGB(gb);
  }, []);

  const saveLimit = useCallback(async () => {
    if (!selectedKey) {
      toast.error("Key not found");
      return false;
    }

    try {
      if (isEnabled) {
        await setLimit(selectedKey.id, formatGBToBytes(limitGB));
      } else {
        await deleteLimit(selectedKey.id);
      }
      return true;
    } catch (error) {
      toast.error("Failed to update data limit");
      return false;
    }
  }, [selectedKey, isEnabled, limitGB]);

  const hasChanges = useCallback(() => {
    const currentHasLimit = !!initialLimit;
    const limitChanged = isEnabled !== currentHasLimit;
    const valueChanged =
      isEnabled &&
      limitGB !== (initialLimit ? formatBytesToGB(initialLimit) : 0);
    return limitChanged || valueChanged;
  }, [initialLimit, isEnabled, limitGB]);

  const reset = useCallback(() => {
    setIsEnabled(!!initialLimit);
    setLimitGB(initialLimit ? formatBytesToGB(initialLimit) : 0);
  }, [initialLimit]);

  return {
    isEnabled,
    limitGB,
    toggleEnabled,
    updateLimit,
    saveLimit,
    hasChanges: hasChanges(),
    reset,
  };
};
