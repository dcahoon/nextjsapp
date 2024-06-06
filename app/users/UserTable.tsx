import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UserTable = async () => {
    // { cache: 'no-store' }
    // { next: { revalidate: 10 } }
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
    const users: User[] = await res.json()

    return (
        <>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered table-zebra'>
                {/* type thead>tr>th*2 to create markup */}
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td></tr>)}
                </tbody>
            </table>
        </>
        
    )
}

export default UserTable