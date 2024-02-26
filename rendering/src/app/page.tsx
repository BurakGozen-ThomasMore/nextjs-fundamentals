import { ClientRendered } from "@/components/client-rendered";
import { ServerRendered } from "@/components/server-rendered";

export default function Home() {
  return (
    <main>
      <ClientRendered />
      <ServerRendered />
    </main>
  );
}
