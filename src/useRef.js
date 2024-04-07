import React ,{useEffect, useRef, useState} from "react";
// //it creates a mutable variable which will not re-render the components
// const UseRef=()=>{
//     const [myData,setMyData]=useState("");
//     const count=useRef(10);
//     useEffect(()=>{
//         count.current=count.current+1;
//     });
//     return(
//         <>
//             <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)}/>
//             <p>the number of times render:{count.current}</p>
//         </>
//     )
// }
// export default UseRef;


//to access dom elements directly



const UseRef=()=>{
    const [myData,setMyData]=useState("");
    const inputElem=useRef("");
   const changeStyle=()=>{
    console.log(inputElem.current);
    inputElem.current.style.backgroundColor="#82E0AA";
    
   }
    return(
        <>
            <input  ref={inputElem} type="text" value={myData} onChange={(e)=>setMyData(e.target.value)}/>\
            <br/>
            <button onClick={changeStyle}>submit</button>
        
        </>
    )
}
export default UseRef;



