import React from 'react'
import _ from 'underscore'

export default function Pagination({total, currentPage, event}) {

    let totalPages = Math.floor(total / 20);

    let rez = _.uniq( [ 1, 2, ( totalPages - 1), totalPages, currentPage - 1, currentPage, currentPage + 1] )
                .sort( (a,b) => a-b )
                .filter( a => a > 0 && a <= totalPages  );
    let paginator = [];
    for( let i = 0; i < rez.length; i++ ){
        let index = rez[i]
        paginator.push(
            <li key={i} onClick={() => event(index)} className={(index === currentPage) ? 'active' : ''}> {index}</li>
        );
        if( (rez[i] + 1) < rez[i+1] ) paginator.push(<li>...</li>);
    }

    if (total > 1) {

        return(
            <div className="pagination">
                <ul className="p-list">
                    { paginator }
                </ul>
            </div>
        )
    } else {
        return(null)
    }
}
