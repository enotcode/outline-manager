import { getServerInfo, getKeysList, getUsage } from "../outline";
import { HeaderWithInfo } from "../components/header-with-info";
import { KeysList } from "../components/keys-list";
import { formatBytes, sumObjectValues } from "../helpers";

export default async function Home() {
  const serverInfo = await getServerInfo();
  const keysList = await getKeysList();
  const usage = await getUsage();

  const usageTotal = formatBytes(
    sumObjectValues(usage.bytesTransferredByUserId)
  );

  return (
    <main className="flex flex-col gap-8 w-full max-w-lg">
      <HeaderWithInfo
        serverName={serverInfo.name}
        keysList={keysList}
        usageTotal={usageTotal}
      />
      <KeysList list={keysList} usage={usage.bytesTransferredByUserId} />
    </main>
  );
}
