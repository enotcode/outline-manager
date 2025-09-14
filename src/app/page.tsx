import { getServerInfo, getKeysList, getUsage } from "../outline";
import { HeaderWithInfo } from "../components/header-with-info";
import { KeysList } from "../components/keys-list";
import { AddKey } from "../components/add-key";
import { formatBytes, sumObjectValues } from "../helpers";

export default async function Home() {
  const serverInfo = await getServerInfo();
  const keysList = (await getKeysList()).reverse();
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
      <AddKey />
      <KeysList list={keysList} usage={usage.bytesTransferredByUserId} />
    </main>
  );
}
