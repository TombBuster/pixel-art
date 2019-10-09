import React, { Component } from 'react';


class GridSizeChange extends Component {
    
    setSizeChange = () => {
        //var col = this.refs.input.value;
        var columns = this.refs.inputSize.value;
        //var rows = 10;
        var gridForm = function(columns) {
            var gridNew = '[\r\n';

            for (var i=0; i < columns*columns-1; i++) {
                gridNew += `{\r\n"id": ${i},\r\n"colour": "blue",\r\n"filled": false\r\n},\r\n`
            }
            
            gridNew += `{\r\n"id": ${columns*columns-1},\r\n"colour": "blue",\r\n"filled": false\r\n}\r\n]`
            
            return gridAttempt = JSON.parse(gridNew)
        }

        var gridAttempt = gridForm(columns)
        this.props.onSizeChange(gridAttempt, columns);
        // TODO: input validation, maybe fixed length hex?
    }
    
    
    render() {
        return (
            <div>
                <input
                ref='inputSize'
                type="text"
                placeholder="Size..."
                />
                <button onClick={this.setSizeChange}>Apply</button>
            </div>
        )
    }
}

export default GridSizeChange
