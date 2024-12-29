"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const navBar = () => {
  const {status, data:session}=useSession()

  if (status === "loading") return null;
  return (
    <div className='flex bg-slate-700 p-4 text-cyan-50 space-x-3' >
        <Link href="/" className='mr-5'>Next.Js</Link>
        <Link href="/users">Users</Link>
        {status === "authenticated" && <div>{session.user!.name}
          <Link href="api/auth/signout" className='ml-3'>Sign Out</Link> </div>}
        {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default navBar