import { useCallback,useState } from "react";
import Todos from "./Todos";
const Callbackhook=()=>{
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState([])
     const increament=()=>{
        setCount(count+1);
     };
const addTodo=useCallback(()=>{
    setTodos((prev)=>[...prev,`new Entry`]);
},[todos]);

// const addTodo=()=>{
//     setTodos((prev)=>[...prev,`new Entry`]);
// }
return(
    <>
    
        <Todos todos={todos} addTodo={addTodo}/>
        <hr/>
        <div>
            count:{count}
            <button onClick={increament}>+</button>
        </div>
    </>
)
}

export default Callbackhook;
