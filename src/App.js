import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Header from './components/layout/Header';
import Grid from './components/Grid';
import ColourChange from './components/ColourChange';
import GridSizeChange from './components/GridSizeChange';
import grid from './grid.json';
import './App.css';

class App extends Component {

  state = {
    colour: 'red',
    columns: '3',
    rows: '3',
    grid: grid 
  }

  

  markFilled = (id) => {
    
    console.log(id)
    
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

  sizeChange = (newSize, columns, rows) => {
    this.setState({grid: newSize})
    this.setState({columns: columns})
    document.documentElement.style.setProperty("--colNum", columns);
    this.setState({rows: rows})
    document.documentElement.style.setProperty("--rowNum", rows);
  }

  render() {
    return (
      <Router>  
      <div className="App">
          <div className="container"></div>
            
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <div className="Grid-format">
                  <Grid  grid={this.state.grid} markFilled={this.markFilled}/>
                  </div>
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
