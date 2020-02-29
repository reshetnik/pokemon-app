import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getDataPokemon} from './service.js'

export default function PokemonItem() {

    let { items } = useParams();

    const [item, setItem] = useState(undefined);


    useEffect(() => {
        (async function load() {
             await getDataPokemon(items)
            .then((responce) => {
                setItem(responce)
            })
        })();

    }, [items])

    if (item !== undefined) {
        return(
            <div className="item">
                <div className="wrap">
                    <div className="img-wrap">
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} alt="" />
                    </div>
                    <div className="description">
                        <div className="title">
                            {item.name}
                        </div>
                        <div className="stats">
                            <div><i>Abilites:</i> {item.abilities.map((abil, i) => (item.abilities.length === i+1) ? `${abil.ability.name}` : `${abil.ability.name}, `)}</div>
                            <div><i>Types:</i> {item.types.map((abil, i) => (item.types.length === i+1) ? `${abil.type.name}` : `${abil.type.name}, `)} </div>
                            <div><i>Stats:</i> {item.stats.map((abil, i) => (item.stats.length === i+1) ? `${abil.stat.name}` : `${abil.stat.name}, `)} </div>
                            <div><i>Weight:</i> {item.weight}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <span>loading</span>
        )
    }


}
