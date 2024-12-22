import React from 'react'
import UserTable from './userTable'
import Link from 'next/link'

interface props{
  searchParams :{sortOrder: string}
}


const UsersPage = async ({searchParams:{sortOrder}}:props) => {

 
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn'>Add User</Link>
      <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage