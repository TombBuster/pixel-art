import React, { Component } from 'react'

class GridSpace extends Component {
    
    buttonStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            background: this.props.gridi.filled ? 
            'black' : 'white'
        }
    }
    
    render() {
        
        const { id, name } = this.props.gridi;
        
        return (
            <div>
                <button onClick={this.props.markFilled.bind(this, id)} style={this.buttonStyle()}>x</button>{' '}
                { name }
            </div>
        )
    }
}

export default GridSpace;
