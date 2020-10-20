import React from 'react'
import ImageCard from './ImageCard'

function ConsultImageList({ imageList, handleNoRedactNeeded, handleRedact, cardIndex }) {
        
        //mapping of individual images within a consult 
        let images = imageList.map((image, imageIndex) => <ImageCard key={image.imageID} 
                                                      image={image} 
                                                     handleNoRedactNeeded={handleNoRedactNeeded} 
                                                     handleRedact={handleRedact}
                                                     imageIndex={imageIndex}
                                                     cardIndex={cardIndex}/>)

    return (
        <div>
           {images} 
        </div>
    )
}

export default ConsultImageList
