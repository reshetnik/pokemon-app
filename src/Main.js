import React, { useState, useEffect } from 'react';
import { getData} from './service.js';
import Item from './Item.js';
import Pag from './Pagination.js'

export default function Main() {

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    let offset = 0

    useEffect(() => {
        (async function load() {
             await getData(offset)
            .then((responce) => {
                setItems(responce.items);
                setTotal(responce.total)
            })
        })();

    }, [offset])

    const event = async (item) => {
        offset = item * 20;
        console.log(item);
        if (item === currentPage) return;
        setCurrentPage(item);

        await getData(offset)
            .then((responce) => {
                setItems(responce.items);
            })
    }

    return (
        <div className="App">
            <h1>List of Pokemons</h1>
            <div className="pokemon-list">

                { items.map((item, i) =>
                    <Item item={item} key={i} id={i}/>
                )}

            </div>
            <Pag total={total} currentPage={currentPage} event={event} />
        </div>
    );
}
