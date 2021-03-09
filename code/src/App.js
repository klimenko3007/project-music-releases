import React from 'react'
import data from './data.json'
import {Album} from './Album.js'

console.log(data)
const albumArray = data.albums.items
console.log(albumArray)
const albumPictureArray = albumArray.map(album =>{
  return album.images[0].url
})
console.log(albumPictureArray)


export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      {albumArray.map((album, index) =>{
        return <Album key={index} name={album.name} picture={album.images[0].url} artist={album.artists[0].name}/>
      })}
      
    </div>
  )
}
