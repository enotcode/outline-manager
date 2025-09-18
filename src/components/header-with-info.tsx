import { type AccessKey } from "../types";

import { InfoCard } from "../ui/info-card";
import { KeyIcon } from "../ui/key-icon";
import { SpeedIcon } from "../ui/speed-icon";

export const HeaderWithInfo = ({
  serverName,
  keysList,
  usageTotal,
}: {
  serverName: string;
  keysList: AccessKey[];
  usageTotal: string;
}) => {
  return (
    <div className="mt-4 w-full flex flex-col gap-4 items-center justify-between">
      <h1 className="text-2xl font-bold">{serverName} Management</h1>
      <div className="w-full flex gap-4">
        <InfoCard
          title="Total keys"
          value={keysList?.length?.toString()}
          icon={<KeyIcon />}
        />
        <InfoCard
          title="Data transferred"
          value={usageTotal}
          icon={<SpeedIcon />}
        />
      </div>
    </div>
  );
};
