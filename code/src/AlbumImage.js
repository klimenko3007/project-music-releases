import React from 'react';

const AlbumImage = (prop) => {
    return (
              <div className="image-container">    
                  <img className="album-image"src={prop.album.images[1].url} alt="Album"/>
                  <div class="icons-container">
                    <div className="hover-container">
                        <img className="icon" src="./icons/heart.svg" alt="heart icon"/>
                        <a href={prop.album.external_urls.spotify} title="link to spotify" target="_blank">
                            <img className="icon" src="./icons/play.svg" alt="play button" />
                        </a>
                        <img className="icon" src="./icons/dots.svg" alt="dots icon" />
                    </div>
                  </div>
              </div>
    )
} 
export default AlbumImage;