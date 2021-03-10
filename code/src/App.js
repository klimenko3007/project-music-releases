import React from 'react'
import data from './data.json'
import {Album} from './Album.js'
import Footer from './Footer.js'
import Header from './Header.js'

console.log(data)
const albumArray = data.albums.items


export const App = () => {
  return (
    <div className="content-container">
      <Header />
      <div className="album-container">
        {albumArray.map((album) =>{
          return <Album key={album.id} album_data={album}/>
          // return <Album key={index} name={album.name} picture={album.images[1].url} artist={album.artists[0].name}/>
        })}
        
      </div> 
      <Footer />
    </div>
  )
}
