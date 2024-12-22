'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
    const router=useRouter();
  return (
    <div 
    className='btn btn-primary text-white'
    onClick={()=> router.push('/users')}>Create</div>
  )
}

export default NewUserPage