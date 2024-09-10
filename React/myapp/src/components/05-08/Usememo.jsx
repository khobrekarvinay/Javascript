import React, { useMemo, useState } from "react";

export const Usememo = () => {
    const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState(["Do assignments."]);
  const [singleTodo, setSingleTodo] = useState("");
  const Addtodo = (event) => {
    setTodos([...todos, singleTodo]);
  }

function handleInput(event) {
    setSingleTodo(event.target.value)
}

const CalculationsfromHeavyValue = useMemo(() => {
    HeavyCalculation(counter)
}, [counter])
return(
    <div>
        <h1> HeavyCalculation: {CalculationsfromHeavyValue}</h1>

       <h1 className="h1color"> Your Todo</h1>
       <button onClick={() => setCounter(counter + 1)}>+</button>
            <input className="input"
                value={singleTodo}
                onChange={handleInput}
                placeholder="Type your todo here" />
            <button className="buttonc" onClick={Addtodo}>Submit Todo</button>
            {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <h1>Counter: {counter}</h1>


    </div>


)

}
function HeavyCalculation(counter){
    for( let i=0; i<1000000000; i++){
        counter+=i;
    }
    return counter;
}

export default Usememo;