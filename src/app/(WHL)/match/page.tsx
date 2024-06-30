import MaxwidthSetter from "@/components/MaxwidthSetter"
// import Image from "next/image"
// import Link from "next/link"
import { auth, signOut } from "auth"
// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/Icons"
import Mph from "@/components/Mph"
import LogoutBtn from "@/components/LogoutBtn"
// import { chooses } from "@/components/obj"
import Select from "@/components/Select"

const page = async() => {

  

// const session = await auth();
const user = true

return (
 
    <MaxwidthSetter>
        <div>
        <div className="">
          <div className="flex flex-col justify-between gap-8 ml-6 mt-8 border-r-2 w-40 border-gray-400 h-full fixed"> 
          <Mph/>
            <div className="fixed bottom-6 mb-6"> 
            <Select/>
            </div>
           
            <div className="fixed bottom-3 mt-2">
            {user ? ( <div>
        <form action={
          async() => {
        "use server"
      await signOut()
      }}>
       <LogoutBtn/>
      </form>
      </div>):(
        <div>

        </div>)}
 </div>
          </div>
          <div>
      
          </div>
          <h1 className=""></h1>
        </div>
        </div>
    </MaxwidthSetter>
     )
}

export default page