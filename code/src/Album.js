import React from 'react';

export const Album = prop => {
    return (
        <div>
            <img src={prop.picture} alt="Album"/>
            <h2>{prop.name}</h2>
            <h3>{prop.artist}</h3> 
        </div>        
    )
}