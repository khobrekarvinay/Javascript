
import { useState } from "react";


function Counter(){
    const [count,setcount]=useState(0);
    function inc(){
        setcount(count+1);
    }
    function dec(){
        if(count<=0){
            return;
        }
        setcount(count-1);
    }
    function reset(){
        setcount(0);
    }

    return (
        <div>
          <h1>Counter:{count}</h1>  
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
          <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter;