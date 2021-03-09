import React from 'react'
import data from './data.json'
import {Album} from './components/Album.js'

//console.log(data)
const albumArray = data.albums.items


export const App = () => {
  return (
    <div className="cards-container">
      {albumArray.map((album, index) =>{
        //console.log(album)
        return (
            <Album  key={index} 
                    name={album.name} 
                    picture={album.images[1].url} 
                    artists={album.artists}/>
          )
      })}
      
    </div>
  )
}

