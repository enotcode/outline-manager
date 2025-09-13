"use client";

import { toast } from "sonner";
import copy from "copy-to-clipboard";
import { AccessKey } from "outlinevpn-api";
import { Row } from "../ui/row";
import { formatBytes } from "../helpers";

export const KeysList = ({
  list,
  usage,
}: {
  list: AccessKey[];
  usage: Record<string, number>;
}) => {
  const getUsageByUserId = (id: string) => usage[id] || 0;

  return (
    <div className="mb-4 w-full overflow-y-auto bg-zinc-800/20 rounded-lg p-4">
      <div className="w-full flex flex-col gap-4">
        {list.length > 0 ? (
          list.map((key) => {
            const onShareClick = () => {
              copy(key.accessUrl);
              toast.success("Link copied to clipboard", {
                classNames: {
                  toast: "!bg-zinc-900/90",
                  title: "!text-white !font-bold",
                  icon: "!text-white",
                },
              });
            };

            return (
              <Row
                key={key.id}
                title={key.name}
                usageByUser={formatBytes(getUsageByUserId(key.id))}
                onShareClick={onShareClick}
              />
            );
          })
        ) : (
          <h1 className="text-center text-gray-400 font-bold">
            Keys list is empty
          </h1>
        )}
      </div>
    </div>
  );
};
