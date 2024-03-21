import React, {useState,useEffect,useRef, useMemo} from "react";

function UseRefHook() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");


  useEffect(() => {
    
    // console.log("obj=", previousInputValue.current)
    previousInputValue.current = inputValue;
    console.log("previousInputValue.current=", previousInputValue.current)
  },[inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


export default UseRefHook;