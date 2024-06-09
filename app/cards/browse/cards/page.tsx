import React from 'react'
import Magic = require("mtgsdk-ts");
import Link from 'next/link';

interface Props {
    searchParams: { cardName: string };
}

export default async function BrowseCards({ searchParams: { cardName }}: Props) {

    const cardResults: any[] = await Magic.Cards.where({name: cardName})

    return (
        <div>
            <h1>Browse Cards Page</h1>
            {/* <form className='flex form'>
                <input name='cardname' id= 'cardname' type='text' />
                <Link href={'/cards/browse/cards/' + cardname} className='btn btn-accent'>Search</Link>
            </form> */}
            {cardResults.map((card) => 
                <p>{card.name}</p>
            )}
        </div>
    )
}