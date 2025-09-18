"use client";

import { useState } from "react";

import { type AccessKey } from "../types";
import { Row } from "../ui/row";
import { Panel } from "../ui/panel";
import { KeyDetails } from "./key-details";
import { formatBytes } from "../helpers";

export const KeysList = ({
  list,
  usage,
}: {
  list: AccessKey[];
  usage: Record<string, number>;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<AccessKey | null>(null);

  const getUsageByUserId = (id: string) => usage[id] || 0;

  return (
    <>
      <div className="w-full overflow-y-auto bg-zinc-800/20 rounded-lg p-4">
        <div className="w-full flex flex-col gap-4">
          {list.length > 0 ? (
            list.map((key) => {
              const onEyeClick = () => {
                setSelectedKey(key);
                setOpen(true);
              };

              return (
                <Row
                  key={key.id}
                  accessKey={key}
                  usageByUser={formatBytes(getUsageByUserId(key.id))}
                  onEyeClick={onEyeClick}
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
      <Panel open={open} setOpen={setOpen} title="Key details">
        <KeyDetails selectedKey={selectedKey} onClose={() => setOpen(false)} />
      </Panel>
    </>
  );
};
