import { Icons } from '@/components/Icons'
import { buttonVariants } from '@/components/ui/button'
import { auth, signIn, } from 'auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const  page = async () => {
// const login = async() => await signIn()
const session = await auth()

// const user = session?.user

  return (
    
    <div className='relative sm:max-w-screen-sm mx-auto px-1 max-w-screen-md flex flex-col justify-center items-center min-h-screen gap-5 '>
      <div className='border border-gray-900 rounded-md bg-green-400 hover:border-gray-700  hover:bg-green-500 transition-all duration-200'>
        <form action={
          async() => {
        "use server"
      await signIn('google', {callbackUrl:"/play"})
      }}>
    <button type='submit' className="group hover:translate-x-2 flex flex-row justify-center items-center flex-1 gap-4 h-14 w-80 transition-all duration-500">
        <div className=' w-8 h-8 group-hover:translate-x-2 duration-1000 group-hover:rotate-45 z-10'>
        <Icons.google className='fill-black group-hover:translate-x-2 '/>
        </div>
        <div className=''>
<h1 className='font-bold text-lg text-gray-900 '> Continue With Google </h1>
</div>

    </button>
    </form>
 
    </div>
        <div className=''>
            <p className='text-black sm:text-wrap px-2 font-medium max-w-prose'> by continuing to win lose or draw you agree to terms and conditions of the platform.</p>
        </div>
       <div className='mt-40 border-b border-gray-300 w-screen'></div>
        {/*  <form action={
        async() => {
          "use server"
        await signOut()}
    }>
      <button type='submit'>
    signOut
      </button>
    </form> */}
    </div>
  )
}

export default page