import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
    searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    
    return (
        <div className='p-5'>
            <h1>Users</h1>   
            <Link href='/users/new' className = 'btn btn-accent'>New User</Link>
            <UserTable sortOrder={sortOrder} />
        </div>
    )
}

export default UsersPage