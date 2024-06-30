
import React from 'react'
import MaxwidthSetter from './MaxwidthSetter'
import Image from 'next/image'
import Link from 'next/link'
import { auth, signOut } from 'auth'
import { cn } from '@/lib/utils'
// import { usePathname } from 'next/navigation'
import SignOut from './SignOut'
// import { Usera } from '@/lib/types'
import { Icons } from './Icons'
import { signOutf } from './action'


const Navbar = async() => {

  const session = await auth();
 const user = session?.user


// const user: boolean = true
  return (
    <div className='sticky z-50 h-16 space-x-0 top-0'>
    <MaxwidthSetter className='border-b-2 border-gray-400'>
      <div className='flex justify-between'>
      <div className="relative h-14 w-14 ml-4 mb-2 ">
        <Link className='fill-[#8BA189] hover:fill-[#387300] transition-all duration-200' href="/">
       <Icons.pitch className='h-14 w-14 '/>
        </Link>
      </div>
{user ? (        <div>
   <SignOut/>
     </div>
     ):
     null

}
      
      </div>
</MaxwidthSetter>
    </div> 
 )
}

export default Navbar