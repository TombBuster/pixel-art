import React, { Component } from 'react'

export class ColourChange extends Component {

    boxStyle = () => {
        
        try{
            return {
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                background: this.refs.input.value
            }
        }
        catch(err) {
            return {
                padding: '10px',
                borderBottom: '1px #ccc dotted',
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
            <div>
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
