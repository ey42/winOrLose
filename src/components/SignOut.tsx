"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { signOutf } from './action';
import { usePathname } from 'next/navigation';
import { Usera } from '@/lib/types';
import LogoutBtn from './LogoutBtn';

const SignOut = () => {

    const pathname = usePathname();
    const matchUrl = pathname.includes('match') || pathname.includes('history') || pathname.includes('profile');
  console.log(pathname)
  return (<div>
   <div className='mr-3'>
    <form action={
signOutf
}>
    <div className={cn("font-bold", {
        "hidden": matchUrl
    })}>
      <LogoutBtn/>
    </div>
  </form>
  </div>
 
 </div> )
}

export default SignOut