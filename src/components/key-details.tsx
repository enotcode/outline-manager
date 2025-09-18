import { useState } from "react";

import { type AccessKey } from "../types";
import { toast } from "../ui/toast";
import { CopyIcon } from "../ui/copy-icon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Toggle } from "../ui/toggle";

import { useDataLimit } from "../hooks/useDataLimit";
import { useShareKey } from "../hooks/useShareKey";

import { deleteKey, renameKey } from "../actions";

export const KeyDetails = ({
  selectedKey,
  onClose,
}: {
  selectedKey: AccessKey | null;
  onClose: () => void;
}) => {
  const [name, setName] = useState(selectedKey?.name || "");
  const dataLimit = useDataLimit(selectedKey);
  const { shareKey } = useShareKey(selectedKey);

  const onDeleteClick = async () => {
    if (!selectedKey) return toast.error("Key not found");
    try {
      await deleteKey(selectedKey.id);
      toast.success("Key deleted successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to delete key");
    }
  };

  const onSaveClick = async () => {
    if (!selectedKey) return;
    if (name.trim() === "") return toast.error("Name is required");

    try {
      if (name !== selectedKey?.name) {
        await renameKey(selectedKey.id, name);
      }

      if (dataLimit.hasChanges) {
        await dataLimit.saveLimit();
      }

      toast.success("Key saved successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to save key");
    }
  };

  const hasAnyChanges = name !== selectedKey?.name || dataLimit.hasChanges;

  return (
    <div className="flex flex-col gap-4 mb-8">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
      />
      <div className="flex gap-2 items-center">
        <pre
          className="m-0 p-2 overflow-auto bg-zinc-900 text-gray-200 rounded-lg font-mono text-sm leading-relaxed"
          tabIndex={0}
        >
          <code>{selectedKey?.accessUrl}</code>
        </pre>
        <span
          className="text-white cursor-pointer hover:text-teal-700 hover:scale-110 transition-all"
          onClick={shareKey}
        >
          <CopyIcon />
        </span>
      </div>
      <Toggle
        label="Enable data limit"
        checked={dataLimit.isEnabled}
        onChange={(e) => dataLimit.toggleEnabled(e.target.checked)}
      />
      <div className="flex gap-2 items-center">
        <Input
          type="number"
          value={dataLimit.limitGB}
          onChange={(e) => dataLimit.updateLimit(Number(e.target.value))}
          disabled={!dataLimit.isEnabled}
          max={999}
        />
        <span>GB</span>
      </div>
      <Button onClick={onSaveClick} disabled={!hasAnyChanges}>
        Save
      </Button>
      <Button variant="danger" onClick={onDeleteClick}>
        Delete
      </Button>
    </div>
  );
};
