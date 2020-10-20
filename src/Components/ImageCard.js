import React from 'react'
import Button from './Button/Button'

function ImageCard({image, handleNoRedactNeeded, handleRedact, cardIndex, imageIndex}) {
    
    //depending on image state, component will show either checkmark or image with potential actions
    if(image.noRedactionNeeded || image.redacted){
    return (
          <div className="imageCard">
             <img src="https://www.iconsdb.com/icons/preview/green/checkmark-xxl.png" 
             alt="checkmark" 
             className='card-image'/>
          </div>
        )
    }
    return (
        <div className="imageCard">
             <img src={image.imageURL} alt="" className='card-image'/>
            <div className="btn-container">
                <Button value="No Redaction Needed" 
                     styleClass="no-redact-btn" 
                     onClick={handleNoRedactNeeded}
                     imageIndex={imageIndex}
                     cardIndex={cardIndex}
                     />
                 <Button value="Redact" 
                     styleClass="redact-btn"
                     onClick={handleRedact}
                     imageIndex={imageIndex}
                     cardIndex={cardIndex}
                     />
            </div>
        </div>
    )
}

export default ImageCard
