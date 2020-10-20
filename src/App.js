import React, {Component} from 'react';
import { econsults } from './data'
import RedactPopup from './Components/RedactPopup'
import ConsultContainer from './Containers/ConsultContainer'

class App extends Component {
 
  //state holds consults, selected image for redaction, selected card and image index to update state
  state = {
    econsults: econsults,
    selected: {},
    cardIndex: null,
    imageIndex: null,
  }
  
  //function to handle the no redaction needed event 
  handleNoRedactNeeded = async (cardIndex, imageIndex) => {
    let econsults = [...this.state.econsults]
    econsults[cardIndex] = {...econsults[cardIndex], ...econsults[cardIndex].images[imageIndex].noRedactionNeeded = true}
    await this.setState({ econsults })
    
  }
  
  //function to handle redaction needed event 
  handleRedact = async (cardIndex, imageIndex) => {
    let result = {...econsults[cardIndex].images[imageIndex]}
     await this.setState({selected : result, cardIndex : cardIndex, imageIndex : imageIndex})
     console.log(this.state.selected)
  }
  
  //fucnction to handle redact completion
  handleDone = async (cardIndex, imageIndex) => {
    let econsults = [...this.state.econsults]
    econsults[this.state.cardIndex] = {...econsults[this.state.cardIndex], ...econsults[this.state.cardIndex].images[this.state.imageIndex].redacted = true}
    await this.setState({ econsults, selected:{}, cardIndex: null, imageIndex: null })
  }


  render(){
    
    let {econsults, selected, cardIndex, imageIndex } = this.state
  
    return (
    <div className="App">
        <ConsultContainer 
        econsults={econsults} 
        handleNoRedactNeeded={this.handleNoRedactNeeded}
        handleRedact={this.handleRedact}
        />
        {(typeof selected.imageURL != "undefined") ? <RedactPopup selected={selected} 
                                                                  onClick={this.handleDone} 
                                                                  card={cardIndex} 
                                                                  image={imageIndex}/> : false}
    </div>
  );

  }
}

export default App;
