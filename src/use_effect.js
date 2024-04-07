// import React, { useEffect, useState } from "react";
// const App=()=>{
//     const[num,setNum]=useState(0);
//     const[nums,setNums]=useState(0);
//     useEffect(()=>{
//         alert("i am clicked");

//     },[num]);//if we use empty array it will only call when we first time refresh the page
//     //[num]if we change first num then only show the change
// return (
//     <>
//     <button onClick={()=>{setNum(num+1)}}> click me {num}</button>
//     <br/>
//     <button onClick={()=>{setNums(nums+1)}}> click me {nums}</button>
//     </>
// )
// }
// export default App;
import React, { useState } from "react";
export default function App(){
    const[resourceType,SetResourceType]=useState('posts');
    return(
        <>
        <div>
        <button onClick={()=>SetResourceType('posts')}>posts</button>
        <button onClick={()=>SetResourceType('users')}>users</button>
        <button onClick={()=>SetResourceType('comments')}>comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
    );
    
      
   
    
};