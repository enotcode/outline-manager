import { useState } from "react";
import { type AccessKey } from "outlinevpn-api";
import copy from "copy-to-clipboard";

import { toast } from "../ui/toast";
import { CopyIcon } from "../ui/copy-icon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { deleteKey, renameKey } from "../actions";

export const KeyDetails = ({
  selectedKey,
  onClose,
}: {
  selectedKey: AccessKey | null;
  onClose: () => void;
}) => {
  const [name, setName] = useState(selectedKey?.name || "");

  const onShareClick = () => {
    if (!selectedKey) return toast.error("Key not found");
    copy(selectedKey.accessUrl);
    toast.success("Link copied to clipboard");
  };

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

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedKey) return;
    setName(e.target.value);
  };

  const onSaveClick = async () => {
    if (!selectedKey) return;
    if (name.trim() === "") return toast.error("Name is required");
    try {
      await renameKey(selectedKey.id, name);
      toast.success("Key saved successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to save key");
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <Input type="text" value={name} onChange={onChangeName} maxLength={100} />
      <div className="flex gap-2 items-center">
        <pre
          className="m-0 p-2 overflow-auto bg-zinc-900 text-gray-200 rounded-lg font-mono text-sm leading-relaxed"
          tabIndex={0}
        >
          <code>{selectedKey?.accessUrl}</code>
        </pre>
        <span
          className="text-white cursor-pointer hover:text-teal-700 hover:scale-110 transition-all"
          onClick={onShareClick}
        >
          <CopyIcon />
        </span>
      </div>
      <Button onClick={onSaveClick} disabled={name === selectedKey?.name}>
        Save
      </Button>
      <Button variant="danger" onClick={onDeleteClick}>
        Delete
      </Button>
    </div>
  );
};
