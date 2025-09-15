import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AccessKey } from "outlinevpn-api";
import copy from "copy-to-clipboard";

import { CopyIcon } from "../ui/copy-icon";
import { Button } from "../ui/button";
import { deleteKey } from "../actions";

export const KeyDetails = ({
  selectedKey,
  onClose,
}: {
  selectedKey: AccessKey | null;
  onClose: () => void;
}) => {
  const router = useRouter();
  const onShareClick = () => {
    if (!selectedKey) return toast.error("Key not found");
    copy(selectedKey.accessUrl);
    toast.success("Link copied to clipboard", {
      classNames: {
        toast: "!bg-zinc-900/90",
        title: "!text-white !font-bold",
        icon: "!text-white",
      },
    });
  };

  const onDeleteClick = async () => {
    if (!selectedKey) return toast.error("Key not found");
    await deleteKey(selectedKey.id);
    toast.success("Key deleted successfully", {
      classNames: {
        toast: "!bg-zinc-900/90",
        title: "!text-white !font-bold",
        icon: "!text-white",
      },
    });
    onClose();
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <p className="font-medium text-gray-200">{selectedKey?.name}</p>
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
      <Button variant="danger" onClick={onDeleteClick}>
        Delete
      </Button>
    </div>
  );
};
