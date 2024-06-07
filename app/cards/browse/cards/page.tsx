import React from 'react'
import * as Scry from "scryfall-sdk";

interface Card {
    name: string;
}

interface Props {
    children: ReactNode;
}


export default async function BrowseCards({ children }: Props) {

    // const card = Magic.Cards.find(() => console.log(card.name)

    // const res = await fetch(
    //     Magic.Cards.find("08618f8d5ebdc0c4d381ad11f0563dfebb21f4ee") ), { cache: 'no-store' })

    // Magic.Cards.find("08618f8d5ebdc0c4d381ad11f0563dfebb21f4ee").then(result => console.log(result.name)); // Blood Scrivener


    const card = await Scry.Cards.byName("Memory Lapse")



    return (
        <div>
            <h1>Browse Cards Page</h1>
            {card.uri}
        </div>
    )
}