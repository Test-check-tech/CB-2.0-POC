import React from 'react';

function App() {
    return (
        <React.Fragment>
            <h1>Content Builder</h1>
        </React.Fragment>
    );
}
export function App2() {
    return (

        App3()
    );
}

export default App;

function App3() {

    /* istanbul ignore else */
    if (true) {
        return (<h1>Content Builder</h1>)
    }


    else {
        return (<h1>Content </h1>)
    }
}
/* istanbul ignore next */
function sum() {

    let i = 0;
    if (true) {
        i = i + 2;

    } else {
        i = i + 3;
    }

}
