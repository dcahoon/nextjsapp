import React from 'react'
import Magic = require("mtgsdk-ts");

export default async function BrowseCards() {

    const cardResults: any[] = await Magic.Cards.where({name: "sylvan"})

    return (
        <div>
            <h1>Browse Cards Page</h1>
            {cardResults.map((card) => 
                <p>{card.name}</p>
            )}
        </div>
    )
}