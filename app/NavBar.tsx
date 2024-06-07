import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex p-5 bg-slate-200'>
        <Link className='p-5' href='/'>Home</Link>
        <Link className='p-5' href='/products'>Products</Link>
        <Link className='p-5' href='/users'>Users</Link>
        <Link className='p-5' href='/admin'>Admin</Link>
        <Link className='p-5' href='/cards'>Cards</Link>
    </div>
  )
}

export default NavBar