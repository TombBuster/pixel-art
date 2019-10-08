import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Header from './components/layout/Header';
import Grid from './components/Grid';
import ColourChange from './components/ColourChange';
import GridSizeChange from './components/GridSizeChange';
import grid from './grid.json';

class App extends Component {

  state = {
    colour: 'red',
    grid: grid 
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

  sizeChange = (newSize) => {
    this.setState({grid: newSize})
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
                  <GridSizeChange onSizeChange={this.sizeChange} />
                </React.Fragment>
              )} />

        
      </div>
      </Router>
    );
  }
}

export default App;
