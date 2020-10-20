import React from 'react'
import Button from './Button/Button'

function RedactPopup({onClick, selected}) {

    
    return (
       <section className='popup' >
          <div className="plot">
             <img src={selected.imageURL} alt={`number ${selected.imageID}`}  className="popup-image"/>
              <div className="censor">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkC_I7erJAnjx42K6X6Xgh9qd0yl6hFSYh-A&usqp=CAU" alt="" className="censor-img"/>
                <p>New Censor</p>
               </div>
           </div> 
             <Button value='Done' onClick={onClick} styleClass="done-btn"/>
        </section>
    )
}

export default RedactPopup
