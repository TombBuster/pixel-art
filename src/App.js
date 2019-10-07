import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Header from './components/layout/Header';
import Grid from './components/Grid';

class App extends Component {

  state = {
    grid: [
      {
        id: '1',
        name: 'grid-space-1',
        filled: false,
      },
      {
        id: '2',
        name: 'grid-space-2',
        filled: true,
      },
      {
        id: '3',
        name: 'grid-space-3',
        filled: false
      }
    ]
  }


  markFilled = (id) => {
    
  
    
    this.setState( { grid: this.state.grid.map(gridi => {
      if(gridi.id === id) {
          gridi.filled = !gridi.filled
      }
      return gridi;
    })
  })
  }


  render() {
    return (
      <Router>  
      <div className="App">
          <div className="container"></div>
            
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Grid grid={this.state.grid} markFilled={this.markFilled}/>
                </React.Fragment>
              )} />

        
      </div>
      </Router>
    );
  }
}

export default App;
