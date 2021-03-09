import React from 'react'
import data from './data.json'
import {Album} from './Album.js'
//import {Artist} from 'Artist.js'

console.log(data)
const albumArray = data.albums.items
// console.log(albumArray)
// const albumPictureArray = albumArray.map(album =>{
//   return album.images[0].url
// })
// console.log(albumPictureArray)
// const albumArtists = albumArray.map( album => {
//   return album.artists
// })
// console.log(albumArtists)
// const AlbumArtistName = albumArtists.map((album) => {
//   const newArray = album.map( artist =>{
//     return artist.name
//   } )
//   return newArray
// })
// console.log(AlbumArtistName)


export const App = () => {
  return (
    <div>
      {albumArray.map((album, index) =>{
        return (
          <div key={index}>
            <Album  key={index} 
                    name={album.name} 
                    picture={album.images[1].url} 
                    artists={album.artists}/>
          </div>
          )
      })}
      
    </div>
  )
}

