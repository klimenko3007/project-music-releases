import React from 'react'; 

export const Artist = (artist_data) => {
    //console.log(artist_data)
    return(
        <a className="artist-name" href={artist_data.url}>
            {artist_data.name}
        </a>
    )
}