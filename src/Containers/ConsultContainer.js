import React from 'react'
import ConsultCard from '../Components/ConsultCard'

function ConsultContainer({ econsults, handleNoRedactNeeded, handleRedact }) {
   
   //mapped array of individual econsults
  let consults = econsults.map( (econsult, cardIndex) => <ConsultCard 
                                                         key={econsult.id} 
                                                         images={econsult.images} 
                                                         id={econsult.id} 
                                                         handleNoRedactNeeded={handleNoRedactNeeded}
                                                         handleRedact={handleRedact}
                                                         cardIndex={cardIndex}/>)

    return (
        <div>
            {consults}
        </div>
    )
}

export default ConsultContainer

