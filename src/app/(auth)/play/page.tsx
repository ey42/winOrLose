import Link from 'next/link'
import React from 'react'
import Choose from '@/components/choose'
import MaxwidthSetter from '@/components/MaxwidthSetter'

const page = async() => {

  return (
    <MaxwidthSetter>
    <div className='relative flex justify-center flex-col gap-6 mx-auto'>
      <h1 className='text-center font-medium text-2xl mt-10'>Choose Competition </h1>
      <Choose />
      {/* <Link href='/'><button>Home</button></Link> */}
    </div>

    </MaxwidthSetter>
  )
}

export default page