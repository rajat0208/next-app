import React from 'react'
import UserTable from './userTable'

interface props{
  searchParams :{sortOrder: string}
}


const UsersPage = async ({searchParams:{sortOrder}}:props) => {

 
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage