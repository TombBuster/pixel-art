import React, { Component } from 'react'
import '../App.css';

class GridSpace extends Component {
    
    buttonStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            background: this.props.gridi.filled ? 
            this.props.gridi.colour : 'white'
        }
    }
    
    render() {
        
        const id = this.props.gridi.id;
        
        return (
            
                <button style={this.buttonStyle()} onClick={this.props.markFilled.bind(this, id)}></button>
            
        )
    }
}


export default GridSpace;
