import React, { Component } from 'react';


class GridSizeChange extends Component {
    
    setSizeChange = () => {
        //var col = this.refs.input.value;
        var columns = 10;
        var rows = 10;
        var gridNew = '[\r\n';

        for (var i=0; i < columns*rows-1; i++) {
            gridNew += `{\r\n"id": ${i},\r\n"colour": "blue",\r\n"filled": false\r\n},\r\n`
        }
        
        gridNew += `{\r\n"id": ${columns*rows-1},\r\n"colour": "blue",\r\n"filled": false\r\n}\r\n]`
        
        var gridAttempt = JSON.parse(gridNew)
        
            this.props.onSizeChange(gridAttempt, columns, rows);
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
