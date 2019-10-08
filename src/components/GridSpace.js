import React, { Component } from 'react'

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
            <div>
                <button onClick={this.props.markFilled.bind(this, id)} style={this.buttonStyle()}></button>{' '}
                
            </div>
        )
    }
}

export default GridSpace;
