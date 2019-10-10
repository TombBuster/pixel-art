import React, { Component } from 'react';
import './components-css.css'

class LoadArt extends Component {
    

    load = () => {

        var file_to_read = document.getElementById("userFile").files[0];
        
        var textPromise = file_to_read.text()
        textPromise.then(text => { 
            console.log(text)
            var testrun = JSON.parse(text) 
            console.log(testrun)
            var col = Math.sqrt(testrun.length)
            this.props.loadFile(col, testrun)
        
        })
            
    }
    
    
    render() {
        return (
           <div className="footer-comp">
                <input
                style={inputStyle}
                type="file"
                id="userFile"/>
                <button onClick={this.load}>Load</button>
            </div>
                

        )
    }
}

const inputStyle = {
    background: 'white',
}

export default LoadArt
