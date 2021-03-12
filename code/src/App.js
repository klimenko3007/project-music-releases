import React from 'react'
import data from './data.json'
import {Album} from './Components/Album.js'
import Footer from './Components/Footer.js'
import Header from './Components/Header.js'

console.log(data)
const albumArray = data.albums.items
const singlesArray = albumArray.filter(single => {
  return single.album_type.includes("single")
} )
const onlyAlbumArray = albumArray.filter(album =>{
  return album.album_type.includes("album")
}
  )
  //console.log(onlyAlbumArray);

export const App = () => {
  return (
    <div className="content-container">
      <Header />
      <section className="section">
        <h1 className="section-heading">Singles</h1>
        <div className="album-container">
          {singlesArray.map((album) =>{
            return <Album key={album.id} album_data={album}/>
        })}
      </div>
      </section>
      <section className="section">
        <h1 className="section-heading">Albums</h1>
        <div className="album-container">
          {onlyAlbumArray.map((album) =>{
            return <Album key={album.id} album_data={album}/>
        })}
      </div>

      </section>
      <Footer />
    </div>
  )
}
