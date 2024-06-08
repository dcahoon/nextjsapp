import Link from 'next/link';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const CardsLayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            <aside className='bg-slate-200 p-5'>
                <h2><Link href='/cards' className='p-2'>Cards Home</Link></h2>
                <p>Browse</p>
                <h2><Link href='/cards/browse/cards' className='p-2'>Cards</Link></h2>
                <h2><Link href='/cards/browse/commanders' className='p-2'>Commanders</Link></h2>
                <h2><Link href='/cards/browse/decks' className='p-2'>Decks</Link></h2>
                <h2><Link href='/cards/browse/themes' className='p-2'>Themes</Link></h2>
            </aside>
            <div className='p-10'>{children}</div>
        </div>
    )
}

export default CardsLayout