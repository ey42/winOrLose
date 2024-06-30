
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import {chooses} from '@/components/obj'

const  Choose = async() => {
    const choose = chooses
   
    // const chooses = [
    //     {
    //         name: "premier league",
    //         description: "england premier league",
    //         url:"/match"
    //     },
    //     {
    //         name: "laliga",
    //         description: "spanish 1st football league",
    //         url:"/match"
    //     },
    //     {
    //         name: "seria A",
    //         description: "Italy 1st football league",
    //         url:"/match"
    //     },
    // ]
  
  return (
    <div className='relatives mt-10'>
        <div className='flex md:flex-row md:justify-start sm:flex-col sm:justify-start gap-10'>
            {choose.map((Choose)=> (
                <Link href={Choose.url} key={Choose.name}>
 <div className='w-44' >  
 <div className={cn("w-44 h-44 flex justify-center items-center text-2xl",{
    "bg-green-400":Choose.name === "premier league",
    "bg-yellow-400":Choose.name === "laliga",
    "bg-red-400":Choose.name === "seria A" 
 })}/* 'w-44 h-44 bg-red-600 flex justify-center items-center text-2xl' */>
     {Choose.name}
</div>
<p className='text-pretty pt-2 text-muted-foreground'>{Choose.description} </p>
</div>
</Link>
            ))}
           
       
        </div>

    </div>
  )
}

export default Choose