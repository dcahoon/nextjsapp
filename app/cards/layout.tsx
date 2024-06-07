import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const CardsLayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            <aside className='bg-slate-200 p-5'>Cards Sidebar</aside>
            <div className='p-10'>{children}</div>
        </div>
    )
}

export default CardsLayout