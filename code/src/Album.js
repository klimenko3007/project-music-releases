import React from 'react';
import {Artist} from 'Artist.js'

// const albumArray = data.albums.items
// const albumArtists = albumArray.map( album => {
//     return album.artists
// })
// const albumArtistName = albumArtists.map((album) => {
//     const newArray = album.map( artist =>{
//         return artist.name
//     } )
//     return newArray
// })
// console.log(albumArtistName)

export const Album = (album_data) => {
    return (
        <div>
            <img src={album_data.picture} alt="Album"/>
            <h2>{album_data.name}</h2>
            {album_data.artists.map((artist_data, index) =>
              {
              return <Artist key={index} name={artist_data.name} url={artist_data.external_urls.spotify}/>
              }
            )}

        </div>        
    )
}
//.



// {albumArtistName.map((album) =>{   
//   return album.map((name, index) => {
//       return <Artist key={index} name ={name} link={index}/>
//   })
// })
// } 