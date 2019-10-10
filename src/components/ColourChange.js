import React, { Component } from 'react'
import './components-css.css'

export class ColourChange extends Component {

    boxStyle = () => {
        
        try{
            return {
                padding: '10px',
                borderBottom: '2px #fff',
                background: this.refs.input.value
            }
        }
        catch(err) {
            return {
                padding: '10px',
                borderBottom: '2px #fff',
                background: 'black'
            }
        }
    
    }

   
    setColourChange = () => {
        var col = this.refs.input.value;
        this.props.onColourChange(col);
        // TODO: input validation, maybe fixed length hex?
    }
   
    changeDyn = () => {
        this.refs.boxChange.style.background = this.refs.input.value;
    }
   
    
   
    render() {
        return (
            <div className="colourStyle">
                <input ref='input'
                type="text"
                placeholder="Colour..."
                onChange={this.changeDyn}
                />
                <button onClick={this.setColourChange}>Apply</button>
                <div ref='boxChange' style={this.boxStyle()}></div>
                
            </div>
        )
    }
}




export default ColourChange
