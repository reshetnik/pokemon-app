import React from 'react';
import {Link} from "react-router-dom";

export default function Item({item, id}) {
    return(
        <div className="pokemon-items" >
            <Link to={`/${item.name}`} >
                <div className="list-title">
                    {item.name}
                </div>
            </Link>
        </div>
    );
}
