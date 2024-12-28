import Link from 'next/link'
import React from 'react'

const navBar = () => {
  return (
    <div className='flex bg-slate-700 p-4 text-cyan-50 space-x-3' >
        <Link href="/" className='mr-5'>Next.Js</Link>
        <Link href="/users">Users</Link>
        <Link href="/api/auth/signin">Login</Link>
    </div>
  )
}

export default navBar