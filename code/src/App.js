import React from 'react'
import data from './data.json'
import Singles from './components/Singles.js'
import AllAbums from './components/AllAlbums.js'
import stretch from './stretch-goal.json'
import Aside from './components/Aside.js'

//console.log(data)
const albumArray = data.albums.items
console.log(albumArray)

const singlesArray = albumArray.filter(album => {
  return (album.album_type.includes("single"))
})

const comparisonFunction = (a, b)=>{
  return new Date(b.release_date) - new Date(a.release_date);
  
  // console.log(new Date(a.release_date))
  // if(new Date(a.release_date) < new Date(b.release_date))
  // { return -1}
  // if (new Date(a.release_date) < new Date(b.release_date)) {
  //   return 1
  // }
  // return 0
}

singlesArray.sort(comparisonFunction)


const OnlyAlbumsArray = albumArray.filter(album =>{
  return (album.album_type.includes("album"))
})
OnlyAlbumsArray.sort(comparisonFunction)

const playListArray = stretch.playlists.items

console.log(playListArray)

export const App = () => {
  return (
    <div className="content-container">
      <Aside playLists={playListArray}/>
      <div className="slingles-albums-container">
        <Singles singles_data={singlesArray} />
        <AllAbums album_data={OnlyAlbumsArray}/>
      </div>
    </div>
  )
}

