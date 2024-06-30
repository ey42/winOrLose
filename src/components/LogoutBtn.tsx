"use client"
import { cn } from "@/lib/utils"
import { Icons } from "./Icons"
import { signOutf } from "./action"

const LogoutBtn = () => {
  return (
    <div>
          <div className={cn("font-medium")}>
          <button className='group hover: flex mt-3 gap-2 fill-[#2f2828] hover:fill-black  text-[#2f2828] hover:text-black transition-all duration-200' onClick={signOutf}>
            <div className='relative h-6 w-6 '>
          <Icons.logout className="group-hover:translate-x-1 group-hover:-rotate-180 h-6 w-6 duration-1000"/>
          </div>
          <div className="flex"><h1 className="group-hover:translate-y-1 duration-300">l</h1><h1 className="group-hover:translate-y-2 text-red-500 duration-500">o</h1><h1 className="group-hover:translate-y-3 duration-1000">g</h1><h1 className="group-hover:translate-y-3 text-red-500 duration-1000">o</h1><h1 className="group-hover:translate-y-2 duration-500">u</h1><h1 className="group-hover:translate-y-1 text-red-500 duration-300">t</h1></div>
          </button>
        </div>
    </div>
  )
}

export default LogoutBtn