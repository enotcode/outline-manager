import { KeyIcon } from "./key-icon";

export const Row = ({
  title,
  usageByUser,
}: {
  title: string;
  usageByUser: string;
}) => {
  return (
    <div className="w-full flex items-center space-x-4 p-3.5 rounded-lg bg-zinc-800">
      <span className="rounded-full bg-zinc-500/20 p-3">
        <KeyIcon />
      </span>
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="text-xs text-gray-400 font-normal">
          {usageByUser === "0" ? "Never used" : usageByUser}
        </span>
      </div>
    </div>
  );
};
