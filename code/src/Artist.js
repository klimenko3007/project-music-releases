import React from 'react'; 

export const Artist = prop => {
    return(
        <a href={prop.link}>
            <p>{prop.name}</p>
        </a>
    )
}