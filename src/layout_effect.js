import React, { useEffect, useLayoutEffect, useState } from "react";
// const LayoutEffect=()=>{
//     useEffect(()=>{
//         console.log("first use effect");
//     },[]);
//     useLayoutEffect(()=>{
//         console.log("second layout effect");
//     },[]);
//     useEffect(()=>{
//         console.log("third use effect")
//     })
// }
// export default LayoutEffect;

const LayoutEffect=()=>{
    const[num,setNum]=useState(0);
    useLayoutEffect(()=>{
        if(num===0)setNum(5+Math.random()*50);
    
    },[num]);
    return(
        <>
            <h2>{num}</h2>
            <button onClick={()=>setNum(0)}>check</button>
        </>
    )
}
export default LayoutEffect;