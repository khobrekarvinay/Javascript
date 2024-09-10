import { createContext, useReducer } from "react";

export const DarkAuthor = createContext();

function Reducer(state, action) {
    switch (action.type) {
      case "DARKMODE":
        return { mode :"dark" };
      case "LIGHTMODE":
        return { mode : "light" };
      default:
        return state;
    }
  }
    const InitialState = {mode: "light"};

    function ParentAuthDark({children}){
        const [state, dispatch] = useReducer(Reducer, InitialState);

      return(
       <DarkAuthor.Provider value={{state, dispatch}}>
           {children}
       </DarkAuthor.Provider>


      )

    }

export default ParentAuthDark;


  