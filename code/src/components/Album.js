import React from 'react';
import {Artist} from './Artist.js'
import AlbumImage from './AlbumImage'

export const Album = (prop) => {
  //console.log(album_data)  
  return (
        <div className="album-card">
            <AlbumImage picture={prop.album_data.images[1]}/>
            <h2>{prop.album_data.name}</h2>
            <div className="artist-container">
              {prop.album_data.artists.map((artist_data, index, array) =>
                {
                //console.log(array)
                return <Artist 
                        key={artist_data.id} 
                        name={artist_data.name} 
                        url={artist_data.external_urls.spotify}
                        index={index}
                        artist_array={array}/>
                }
              )}
            </div>

        </div>        
    )
}



// {albumArtistName.map((album) =>{   
//   return album.map((name, index) => {
//       return <Artist key={index} name ={name} link={index}/>
//   })
// })
// } 