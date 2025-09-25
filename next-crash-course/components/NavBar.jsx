import React from 'react'
import Link from 'next/link';
function NavBar() {
  return (
    <div className='flex gap-x-2 px-[300px]  w-full h-[60px] bg-black text-white justify-start items-center'>
        <div><Link href="/">Home</Link></div>
        <div><Link href="/about">about</Link></div>
        <div><Link href="/footer">footer</Link></div>
    </div>
  )
}

export default NavBar