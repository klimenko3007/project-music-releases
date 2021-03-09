import React from 'react' 

const AlbumImage = (album) => {
    return (
        <div className="image-container">
            <img className="image" src={album.picture} alt="Album"/>
        </div>
    )

}

export default AlbumImage