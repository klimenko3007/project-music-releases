import React from 'react';

const Artist = (prop) => {
    return (
        <a className="artist-name" title="link to the artist" target="_blank" href={prop.artist.external_urls.spotify}>
            {prop.artist.name}
        </a> 
    )
}
export default Artist;