import React from 'react'

interface user {
    id: number;
    name: string;
    email: string;
}

const userTable = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store" })
    const users: user[] = await res.json();
    return (
        <>
            <table className='table table-zebra'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default userTable