import React from 'react';
import {Artist} from './Artist.js'
import AlbumImage from './AlbumImage'

export const Album = (album_data) => {
  //console.log(album_data)  
  return (
        <div className="album-card">
            <AlbumImage picture={album_data.picture}/>
            <h2>{album_data.name}</h2>
            {album_data.artists.map((artist_data, index) =>
              {
              return <Artist 
                      key={index} 
                      name={artist_data.name} 
                      url={artist_data.external_urls.spotify}/>
              }
            )}

        </div>        
    )
}



// {albumArtistName.map((album) =>{   
//   return album.map((name, index) => {
//       return <Artist key={index} name ={name} link={index}/>
//   })
// })
// } 