import React from 'react'
import {Album} from "./Album.js"
    
const AllAbums = (prop) => {
  return (
    <section className="albums-section">
      <h1>Albums</h1>
      <div className="cards-container">
        {prop.album_data.map((album) =>{
          //console.log(album)
          return (
              <Album  key={album.id} album_data= {album}/>
            )
        })}
      </div>
    </section>
  )
}

export default AllAbums
    
    