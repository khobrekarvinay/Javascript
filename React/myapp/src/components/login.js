import { useContext } from "react";
import { DarkAuthor } from "./05-08/DarkmodeAuth";


function Login() {
  const { state, dispatch } = useContext(DarkAuthor);
  const ChangeTheme = () => {
    if (state.mode == "light") {
      dispatch({ type: "DARKMODE" });
    } else {
      dispatch({ type: "LIGHTMODE" });
    }
  };
  return (
    <>
      <p>Current Theme - {state.mode}</p>
      <h1
        style={{
          backgroundColor: state.mode == "light" ? "white" : "black",
          color: state.mode == "light" ? "black" : "white",
        }}
      >
        Login
      </h1>
      <button onClick={ChangeTheme}>Change Theme Mode </button>
    </>
  );
}

export default Login;