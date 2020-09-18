import React from 'react';
import myInitObjectsss from './B'


 var key = localStorage.key( 0 );
 console.log(key)
  var item =  localStorage.getItem("input1" );
  console.log(item)

export default ()=> {
  
  return (
      <div>
          <label>{item}</label>
      </div>
  )    
}
