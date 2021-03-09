import React from 'react';
// import {Artist} from 'Artist.js'

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

export const Album = (prop) => {
    return (
        <div>
            <img src={prop.picture} alt="Album"/>
            <h2>{prop.name}</h2> 
        </div>        
    )
}
// {albumArtistName.map((album) =>{   
//   return album.map((name, index) => {
//       return <Artist key={index} name ={name} link={index}/>
//   })
// })
// } 