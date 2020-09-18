import React, { Component } from 'react';
import axios from 'axios';
import VisualDiff from 'react-visual-diff'
import ReactDiffViewer from 'react-diff-viewer';
import { visualDomDiff } from 'visual-dom-diff'
import htmlCompare from 'html-compare';

// import DiffMatchPatch from 'diff-match-patch';


class AxiosApp extends Component {
    state = {
        error: null,
        greeting: null,
        buttonClicked: false
    }
    fetchStudentDetails = () => {
        const url = `https://jsonplaceholder.typicode.com/todos/1`;
        axios
            .get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    greeting: "Student Details Fetched Successfully Open Console !!",
                    buttonClicked: true
                })
                console.log(this.state.users)
            })
            .catch(error => {
                this.setState({
                    error: "Oops, failed to fetch details!"
                })
            })
    }
    render() {
        const buttonText = this.state.buttonClicked ? 'Details Fetched ' : 'Load Student Details'
        const oldCode = <h1>hai hello </h1>;
        const newCode = <h1>hai hellossss </h1>;
        const diffProps = ['children', 'type', 'className', 'style']

        // const dmp = new DiffMatchPatch();
        // const diff = dmp.diff_prettyHtml('dogs bark', 'cats bark');
        // const diffNode = visualDomDiff(originalNode, changedNode, options)
        var result = htmlCompare.compare('<span><span style={{ color: "green" }}>This</span>is the left side</span>', '<span>This is the right sidex</span>');
        console.log("hal")
        if (result.different) {
            console.log("HTML fragments are different, changes:");
            result.changes.map(function (change) {
                console.log("In node " + change.before.parentPath + ":\n\t" + change.message);
            });
        } else {
            console.log("No changes found.");
        }
        return (
            <div>
                {/* <button onClick={this.fetchStudentDetails} disabled={this.state.buttonClicked} >
                    {buttonText}
                </button> */}
                <VisualDiff
                    left={<span><span style={{ color: "green" }}>This</span>is the left side</span>}
                    right={<span>This is the right sidex</span>}
                    renderChange={({ type, children }) =>
                        type === 'added'
                            ? <leftside>{type}</leftside>
                            : <rightside>{type}</rightside>
                    } />

                {/* {this.diff} */}

                {/* <ReactDiffViewer oldValue={
                    oldCode 
                }
                    newValue={
                        newCode
                    }
                    splitView={false}
                    useDarkTheme={false}
                    leftTitle="Existing One"
                    rightTitle="Changed one"
                /> */}
                {/* <p role="greeting">
                    {this.state.greeting && <h1>{this.state.greeting}</h1>}
                </p> */}
                < p role="alert" data- testid="alert" >
                    {this.state.error}
                </p >
                {/* {this.state.greeting && <h1>{this.state.greeting}</h1>}*/}
                {this.state.error && <p role="alert">Oops, failed to fetch!</p>}
            </div >
        )
    }
}
export default AxiosApp;
