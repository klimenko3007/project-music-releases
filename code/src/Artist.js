import React from 'react'; 

export const Artist = (artist_data) => {
    return(
        <a href={artist_data.url}>
            {artist_data.name}
        </a>
    )
}