import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Header from './components/layout/Header';
import Grid from './components/Grid';
import ColourChange from './components/ColourChange';

class App extends Component {

  state = {
    colour: 'red',
    grid: [
      {
        id: '1',
        colour: 'blue',
        filled: false,
      },
      {
        id: '2',
        colour: 'blue',
        filled: true,
      },
      {
        id: '3',
        colour: 'blue',
        filled: false
      }
    ]
  }


  markFilled = (id) => {
    
  
    
    this.setState( { grid: this.state.grid.map(gridi => {
      if(gridi.id === id) {
          
          gridi.filled = !gridi.filled
          gridi.colour = this.state.colour
      }
      return gridi;
    })
  })
  }

  colourChange = (newColour) => {
    this.setState({colour: newColour})
}


  render() {
    return (
      <Router>  
      <div className="App">
          <div className="container"></div>
            
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Grid grid={this.state.grid} markFilled={this.markFilled}/>
                  <ColourChange onColourChange={this.colourChange} />
                </React.Fragment>
              )} />

        
      </div>
      </Router>
    );
  }
}

export default App;
