"use client"

import Link from "next/link"
import { Icons } from "./Icons"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"


const Mph = () => {
    const router = useRouter();
    const pathname = usePathname();

    const matchUrl = pathname.includes('match') ? '': "/match";
    const historyUrl = pathname.includes('history') ? '': "/history";
    const profileUrl = pathname.includes('profile') ? '': "/profile";

  return (
    <div>
            <div className="flex flex-col justify-between gap-8">
            <div className="">
                <Link href={matchUrl} className={cn("flex gap-2 transition-all duration-200",{
                    "text-[#387300] font-bold fill-[#387300] hover:text-[#8BA189] hover:fill-[#8BA189]":pathname.includes("match"),
                    "fill-[#8BA189] font-bold hover:fill-[#387300] text-[#8BA189] hover:text-[#387300]":!pathname.includes("match")
                })}>
                <div className="relative w-8 h-8">
                <Icons.pitch className="w-8 h-8" />
                </div>
                <h1 className=" pt-[5.5px]">Week Match</h1>
                </Link>
            </div>
            <div className=" ">
            <Link href={historyUrl} className={cn("flex gap-2 transition-all duration-200",{
                    "text-[#387300] font-bold fill-[#387300] hover:text-[#8BA189] hover:fill-[#8BA189] ":pathname.includes("history"),
                    "fill-[#8BA189] font-bold hover:fill-[#387300] text-[#8BA189] hover:text-[#387300]":!pathname.includes("history")
                })}>
                <div className=" w-8 h-8">
                <Icons.pitch className="w-8 h-8 "/>
                </div>
                <h1 className=" pt-[5.5px]">History</h1>
                </Link>
            </div>
            <div className="">
            <Link href={profileUrl} className={cn("flex gap-2 transition-all duration-200",{
                    "text-[#387300] font-bold fill-[#387300] hover:text-[#8BA189] hover:fill-[#8BA189]":pathname.includes("profile"),
                    "fill-[#8BA189] font-bold hover:fill-[#387300] text-[#8BA189] hover:text-[#387300]":!pathname.includes("profile")
                })}>
                <div className="relative w-8 h-8">
              <Icons.pitch className="w-8 h-8 "/>
                </div>
                <h1 className=" pt-[5.5px] ">Leaderboard</h1>
                </Link>
            </div>
            </div>
    </div>
  )
}

export default Mph