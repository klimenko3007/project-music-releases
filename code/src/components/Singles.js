import React from "react";
import {Album} from "./Album.js"

const Singles = (prop) => {
    return (
      <section className="singles">
        <h1>Singles</h1>
        <div className="cards-container">
          {prop.singles_data.map((album) =>{
            //console.log(album)
            return (
                <Album  key={album.id} album_data= {album}/>
              )
          })}
        </div>
      </section>
    )
}
export default Singles