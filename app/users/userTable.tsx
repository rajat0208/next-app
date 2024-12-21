import React from 'react'
import Link from 'next/link';
import {sort} from "fast-sort";

interface user {
    id: number;
    name: string;
    email: string;
}

interface props{
    sortOrder:string;
}

const userTable = async ({sortOrder}:props) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store" })
    const users: user[] = await res.json();

    const sortedUser= sort(users).asc(sortOrder==="email"? user=>user.email: user=>user.name)
    return (
        <>
            <table className='table table-zebra'>
                <thead>
                    <tr>
                        <th>
                            <Link href="/users?sortOrder=name">Name</Link>
                        </th>
                        <th>
                        <Link href="/users?sortOrder=email">Email</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUser.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default userTable