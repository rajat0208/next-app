import React from 'react'

interface user{
    id:number;
    name:string;
}

const UsersPage = async() => {
   const res= await fetch ('https://jsonplaceholder.typicode.com/users',{cache:"no-store"})
   const users:user []=await res.json();
  return (
    <>
    <h1>Uers</h1>
    <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage