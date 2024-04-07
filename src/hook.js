import React, { useState } from "react";


const App=()=>{
    const state=useState();
    const [count,setCount]=useState(5);
//  const name=['vi','no','d'];
//  const [name1,name2,name3]=name;

const IncNum=()=>{
    
    setCount(count+1);
    // console.log('clicked'+count++);
}
    return (
    <>
        <h1>{count}</h1>
        <button onClick={IncNum}>click me</button>
    </>
    )

}
export default App;
// function HookCounterTwo(){
//     const intialCount=0;
//     const[count,setCount]=useState(intialCount);
//     return(
//         <div>
//             count:{count}
//             <button onClick={()=>setCount(intialCount)}>Reset</button>
//             <button onClick={()=>setCount(count+1)}>Increament</button>
//             <button onClick={()=>setCount(count-1)}>Decreament</button>
//         </div>
//     )
// }
// export default HookCounterTwo;