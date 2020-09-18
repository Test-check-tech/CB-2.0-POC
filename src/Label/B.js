import React from 'react';
// import {getKey} from './A'
// export default function B() {
// const myInitObject = {
//     test: "dddd",
//     somes: {
//         "DLM": "i am from DLM",
//         "Kap": "i am from KAP",
//         "Alaska": "i am from Alaska"
//     }
// };
// console.log(myInitObject)
// Object.freeze(myInitObject)
// return (

//     <div>
//         {/* {myInitObject} */}
//     </div>
// );
// }
const myInitObjectsss = () => {
    const myInitObject =
        [
             {
                
                     "DLM": "i am from DLM", 
                     "Kap": "i am from KAP", 
                     "Alaska": "i am from Alaska" 
                
            }
        ]
        ;
    // var msg = "hello";
    var found = myInitObject.map(function (element) {
    return element;
});
    return found;
};
export default myInitObjectsss;
