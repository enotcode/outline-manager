import { KeyIcon } from "./key-icon";
import { CopyIcon } from "./copy-icon";
import { EyeIcon } from "./eye-icon";
import { type AccessKey } from "../types";
import { useShareKey } from "../hooks/useShareKey";
import { useDataLimit } from "../hooks/useDataLimit";

export const Row = ({
  accessKey,
  usageByUser,
  onEyeClick,
}: {
  accessKey: AccessKey;
  usageByUser: string;
  onEyeClick: () => void;
}) => {
  const { shareKey } = useShareKey(accessKey);
  const { isEnabled, limitGB } = useDataLimit(accessKey);

  return (
    <div className="w-full flex items-center space-x-4 p-3.5 rounded-lg bg-zinc-800">
      <span className="rounded-full bg-zinc-500/20 p-3">
        <KeyIcon />
      </span>
      <div className="flex flex-col flex-1 truncate">
        <h3 className="text-sm font-medium truncate">{accessKey.name}</h3>
        <span className="text-xs text-gray-400 font-normal">
          {usageByUser === "0"
            ? "Never used"
            : `${usageByUser} ${isEnabled ? `/ ${limitGB} GB` : ""}`}
        </span>
      </div>
      <span
        className="text-white cursor-pointer hover:text-teal-700 hover:scale-110 transition-all"
        onClick={shareKey}
      >
        <CopyIcon />
      </span>
      <span
        className="text-white cursor-pointer hover:text-teal-700 hover:scale-110 transition-all"
        onClick={onEyeClick}
      >
        <EyeIcon />
      </span>
    </div>
  );
};
