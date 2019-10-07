import React, { Component } from 'react';
import GridSpace from './GridSpace';

class Grid extends Component {
    
    render() {
        return this.props.grid.map((gridi) => (
            <GridSpace key={gridi.id} gridi={gridi} markFilled={this.props.markFilled} />
        ));
    }
}

export default Grid;
