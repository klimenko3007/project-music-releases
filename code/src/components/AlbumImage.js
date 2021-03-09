import React from 'react' 

const AlbumImage = (album) => {
    return (
        <div className="image-container">
            <img className="image" src={album.picture} alt="Album"
            />
            <div className="buttons-container">
                <div className="wrapper">
                    <img className="heart" src="./icons/heart.svg" alt="Heart"/>
                    <img className="play-button" src="./icons/play.svg" alt="Play button"/>
                    <img className="dots" src="./icons/dots.svg" alt="dots" />
                </div>
            </div>
        </div>
    )

}

export default AlbumImage