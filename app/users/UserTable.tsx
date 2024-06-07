import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    // { cache: 'no-store' }
    // { next: { revalidate: 10 } }
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
    const users: User[] = await res.json()
    
    const sortedUsers = sort(users).asc(
        sortOrder === 'email'
            ? (user) => user.email
            : (user) => user.name
    )

    return (
        <>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered table-zebra'>
                {/* type thead>tr>th*2 to create markup */}
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
                    {sortedUsers.map(user => 
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)}
                </tbody>
            </table>
        </>
        
    )
}

export default UserTable