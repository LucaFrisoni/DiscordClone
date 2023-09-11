import { ModeToggle } from "@/components/mode-toogle";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import axios from "axios";

export default async function Home() {
  const profile = await initialProfile();

  const { data } = await axios.get(
    `http://localhost:3001/server/member?userId=${profile._id}`
  );
  const server = data;

  console.log(server);
  // if(server){
  //   return redirect(`/servers/$`)
  // }

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
