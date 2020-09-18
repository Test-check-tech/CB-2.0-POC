import React from 'react'
import { render } from 'react-dom'
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import App from './App'
// import Sample from './Component/Sample'
// import C from './Label/C'
import AxiosHooksMock from './Axios/AxiosHooksMock'
import test from './visualDiff/test'
import Breadcrumb from './Breadcrumb/Breadcrumb'
// import Diff from './visualDiff/visualDiff'
// import AxiosMockTest from './Axios/AxiosHooksMock'
// optional cofiguration

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER
// };


var item = {

    "DLM": "i am from DLM",
    "Kap": "i am from KAP",
    "Alaska": "i am from Alaska"
}
localStorage.setItem("input1", JSON.stringify(item));

render(<Breadcrumb />, document.getElementById('root'))