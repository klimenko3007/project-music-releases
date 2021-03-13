import React from 'react'; 

// const generateDelimiter = (index, length) => {
//     if (index === length - 2) {
//         console.log(index, length)
//         return " & ";
      
//     } 
//     else if (index < length - 2) {
//         console.log(index, length)
//         return ", ";
//     }
//     else {
//         console.log(index, length)
//         return
//     }
//   };
            /* {artist_data.name}
            {generateDelimiter(artist_data.index, artist_data.artist_array.length)} */
  

export const Artist = (props) => {
    //console.log("Artist data", artist_data)
    if(props.index === props.artist_array.length-2){
        return(
        <a className="artist-name" href={props.url}>
            {props.name} & 
        </a>
    )
    } else if(props.index < props.artist_array.length-2) {
        return (
            <a className="artist-name" href={props.url}>
                {props.name},
            </a>
        )
    } else {
        return (
            <a className="artist-name" href={props.url}>
                {props.name}
            </a>
        )
    }
}