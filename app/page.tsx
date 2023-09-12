import { ModeToggle } from "@/components/mode-toogle";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import axios from "axios";
import { db } from "@/lib/db";
import InitialModal from "@/components/modals/InitialModal";

export default async function Home() {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
     <InitialModal />
    </div>
  );
}
 {
   /* <UserButton afterSignOutUrl="/" />
      <ModeToggle /> */
 }