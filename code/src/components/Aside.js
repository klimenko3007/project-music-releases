import React from 'react'

const Aside = (prop) => {
    return (
        <aside className="aside">
        <h1 className="aside-title" >Playlists</h1>
        <div className="playlist-container">
          {prop.playLists.map(playlist => {
              return(
                <div key={playlist.id} className="playlist-card">
                    <img className="playlist-image" alt="Album cover" src={playlist.images[0].url}/>
                </div>
              )
            })
          }
      </div>
    </aside>
    )
}

export default Aside