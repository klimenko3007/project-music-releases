import React from 'react'
import data from './data.json'
import stretchGoal from './stretch-goal.json' 
import {Album} from './Components/Album.js'
import Footer from './Components/Footer.js'
import Header from './Components/Header.js'
import Playlist from './Components/Playlist.js'

console.log(stretchGoal)
const playlistArray =stretchGoal.playlists.items
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
      <div className="main">
        <Playlist array={playlistArray}/>
        {/* <Section array={singlesArray} title="Singles"/>
        <Section array={onlyAlbumArray} title="Albums"/> */}
        <div className="section-container">
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
        </div>
      </div>
      <Footer />
    </div>
  )
}
