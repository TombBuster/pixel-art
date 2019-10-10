import React, { Component } from 'react'
import './components-css.css'

class SaveArt extends Component {
    
    
    onClick = () => {

        var gridData = this.props.grid;
        console.log(gridData)
        var json = JSON.stringify(gridData);
        console.log(json)
        var blob = new Blob([json], {type: "application/json"});
        console.log(blob)
        var url  = URL.createObjectURL(blob);
        var dbutt = this.refs.downloadButton
        dbutt.href = url
        dbutt.download = this.refs.saveAs.value;

        
    }
    
    
    
    
    
    render() {
        return (
            
            <div className="footer-comp">
                    <input type="text" ref="saveAs" placeholder="Name..."></input>
                    <a ref="downloadButton">
                    <button onClick={this.onClick}>Save</button>
                    </a>
            </div>
        )
    }
}

export default SaveArt
