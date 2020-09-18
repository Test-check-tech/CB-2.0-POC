import React from 'react';
export default function C(props) {
  console.log(props.userArray)
  return (
    <div>
      <br />
      <label> {props.userArray.somes.DLM}</label><br />
      <textbox>{props.userArray.somes.Kap}</textbox>
    </div>
  );
}
