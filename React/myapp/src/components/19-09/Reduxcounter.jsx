import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Decrement, Increment, Reset } from "../Redux/actions"


const ReduxCounter=()=> {
    const counter= useSelector((state) => state.counter.counter);
    const dispatch= useDispatch();
    const IncrementCounter =()=>{
        dispatch(Increment());
    };
    const DecrementCounter =()=>{
        dispatch(Decrement());
    };
    const ResetCounter =()=>{
        dispatch(Reset());
    };

    return(
        <div>
       <h1>Redux Counter</h1>
       <h2> Counter: {counter}</h2>
       <button onClick={IncrementCounter}>+</button>
       <button onClick={DecrementCounter}>-</button>
       <button onClick={ResetCounter}>Reset</button>
        </div>
    );

};
export default ReduxCounter;