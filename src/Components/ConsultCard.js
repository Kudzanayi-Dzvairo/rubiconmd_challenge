import React from 'react'
import ConsultImageList from './ConsultImages'

function ConsultCard({ images, id, handleNoRedactNeeded, handleRedact, cardIndex }) {
    

    return (
        <div className='consult-card'>
            <h3>eConsult #{id}</h3>
            <ConsultImageList imageList={images} 
                              handleNoRedactNeeded={handleNoRedactNeeded}
                              handleRedact={handleRedact}
                              cardIndex={cardIndex}/>
        </div>
    )
}

export default ConsultCard
