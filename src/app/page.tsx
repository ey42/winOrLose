import MaxwidthSetter from "@/components/MaxwidthSetter";
import { Button, buttonVariants } from "@/components/ui/button";
import { auth, signOut } from "auth";
import Link from "next/link";


export default async function Home() {
  const session = await auth()


  return (
 <MaxwidthSetter>
  <div className="flex flex-col gap-4 items-center justify-center my-44">
  <h1 className="text-4xl font-bold"> Win Lose or Draw</h1>
  <p className="text-gray-900 text-xl font-bold"> start your journey... </p>
  <Link href='/play' className="w-full flex justify-center">
   <Button 
className={buttonVariants({ className: "mb-3 bg-[#8BA189] w-full max-w-44 text-black font-bold text-center text-lg hover:bg-green-500"})}>
   play 
   </Button>
  </Link>
  </div>
</MaxwidthSetter>

  );
}
