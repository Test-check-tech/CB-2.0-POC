import React, { Component } from 'react'

class Sample extends Component {
    state = {
        value: null,
    };    
    render() {
        
        return (
            <div >
                <div><h1 align="center">Item Creation</h1>
                    <hr className='new'></hr>
                </div>
                &emsp;&emsp; <b>Task Type :</b>&emsp;
                <select id="dropdown" data-testid="todos" >
                    <option >Select Task Type</option>
                    <option value="1">Multiple Choice - Keyed</option>
                    <option value="2">True/False</option>
                    <option value="3">Multiple Choice - Scaled</option>
                    <option value="4">Multiple Choice - Multiple Selection</option>
                    <option value="5">Multi-Part</option>
                </select>
            </div>

        )
    }
}
export default Sample