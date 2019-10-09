import React, { Component } from 'react';


class GridSizeChange extends Component {
    
    setSizeChange = () => {
        //var col = this.refs.input.value;
        var columns = this.refs.inputSize.value;
        //var rows = 10;
        var gridNew = '[\r\n';

        for (var i=0; i < columns*columns-1; i++) {
            gridNew += `{\r\n"id": ${i},\r\n"colour": "blue",\r\n"filled": false\r\n},\r\n`
        }
        
        gridNew += `{\r\n"id": ${columns*columns-1},\r\n"colour": "blue",\r\n"filled": false\r\n}\r\n]`
        
        var gridAttempt = JSON.parse(gridNew)
        
        var fs = require('browserify-fs');

        fs.mkdir('./home', function() {
            fs.writeFile('./hello-world.txt', 'Hello world!\n', function() {
                fs.readFile('./hello-world.txt', 'utf-8', function(err, data) {
                    console.log(data);
                });
            });
        });


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
