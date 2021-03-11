import React from 'react'; 

const generateDelimiter = (index, length) => {
    if (index === length - 2) {
        console.log(index, length)
        return " & ";
      
    } 
    else if (index < length - 2) {
        console.log(index, length)
        return ", ";
    }
    else {
        console.log(index, length)
        return
    }
  };
  

export const Artist = (artist_data) => {
    console.log("Artist data", artist_data)
    
    return(
        <a className="artist-name" href={artist_data.url}>
            {artist_data.name}
            {generateDelimiter(artist_data.index, artist_data.artist_array.length)}
        </a>
    )
}