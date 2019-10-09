import React, { Component } from 'react';


class LoadArt extends Component {
    

    load = () => {
      
        var output = [];
        var file_to_read = document.getElementById("userFile").files[0];
        var fileread = new FileReader();
        fileread.onload = function(e) {
            var content = e.target.result;
            var intern = JSON.parse(content);
            
            var myVar = JSON.stringify(intern)
            output[0] = myVar;
            console.log(myVar);
            //return myVar 
            
            //storeResults(myVar)
        };
        
        fileread.readAsText(file_to_read);
        console.log(output)
        
        
        /*function storeResults(result) {
            console.log(result)
            }*/
            
    }
    
    
    render() {
        return (
           <div>
                <input
                type="file"
                id="userFile"/>
                <button onClick={this.load}>Load</button>
            </div>
                

        )
    }
}

export default LoadArt
