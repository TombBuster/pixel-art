import React, { Component } from 'react'

export class ColourChange extends Component {

    

   
    setColourChange = () => {
        var col = this.refs.input.value;
        this.props.onColourChange(col);
        // TODO: input validation, maybe fixed length hex?
    }
   
    
   
    
   
    render() {
        return (
            <div>
                <input ref='input'
                type="text"
                placeholder="Colour..."
                />
                <button onClick={this.setColourChange}>Apply</button>
                
            </div>
        )
    }
}





export default ColourChange
