import React, { Component } from 'react';
import gridChange from '../tmp-file.json';

class GridSizeChange extends Component {
    
    setSizeChange = () => {
        //var col = this.refs.input.value;
        var column = 5;
        var row = 5;
        var gridNew = '[\r\n';

        for (var i=0; i < column*row; i++) {
            gridNew += `{\r\n"id": ${i},\r\n"colour": "blue",\r\n"filled": false\r\n},\r\n`
        }
        
        gridNew += `{\r\n"id": ${column*row},\r\n"colour": "blue",\r\n"filled": false\r\n}\r\n]`
        console.log(gridNew)
        var gridAttempt = JSON.parse(gridNew)
        console.log(gridAttempt)
            this.props.onSizeChange(gridAttempt);
        // TODO: input validation, maybe fixed length hex?
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.setSizeChange}>Apply</button>
            </div>
        )
    }
}

export default GridSizeChange
