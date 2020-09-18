import C from './C'
import E from './E'
import React from 'react';
export default class D extends React.PureComponent {
    state = {
            flag: 0,
            userArray: [1, 2, 3, 4, 5],
            somes: {
                "DLM": "i am from DLM",
                "Kap": "i am from KAP",
                "Alaska": "i am from Alaska"
            }
        }
    constructor(props) {
        super(props);
        
        // setInterval(() => {

        //   // Here we are creating the new Array Object during setState using "Spread" Operator

        //   this.setState({
        //     userArray: [...this.state.userArray, 6]
        //   });
        // }, 1000);
    }

    render() {
        // this.state.flag++;
        // console.log(this.state.flag)
        return (
            <div>
                {this.state.somes} 
                </div>
                
            
        )
    }
}