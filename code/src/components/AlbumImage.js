import React from 'react' 

const AlbumImage = (prop) => {
    //console.log("Image",prop)
    return (
        <div className="image-container">
            <img className="image" src={prop.picture.url} alt="Album"
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