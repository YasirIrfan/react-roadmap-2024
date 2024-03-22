import React, { useEffect, useState } from "react";
import ThemeToggle from "./component/10-themeToggle";
import Content from "./component/11-content";
import InputBox from "./component/8-inputBox";
import UseReducer from "./component/12-useReducer";
import MyForm from "./component/customHookForm";
import Resize from "./component/resize";
import FormReducer from "./component/13-formReducer";
import TranslationComponent from "./component/6-TranslationComponent";
import UseRefHook from "./component/9-UseRefHook";
import CustomForm from "./component/1-customForm";
import MyButton from "./component/2-composition";
import Post from "./component/14-0-Post";
import Form from "./component/Form";
import "./App.css";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [isToggle, setIsToggle] = useState(false);
  // console.log("theme=", theme);

  const values = {
    theme,
    setTheme,
    isToggle,
    setIsToggle,
  };

  return (
    <ThemeContext.Provider value={values}>
      <div className="App">
        {/* <CustomForm /> */}
        {/* <MyButton/> */}

        {/* <ThemeToggle /> 
        <Content />   */}

        {/* <InputBox />  */}
        {/* <Resize /> */}
        {/* <MyForm /> */}
        {/* <FormReducer /> */}

        {/* <TranslationComponent
          word="hello"
          fromLanguage="en"
          toLanguage="fr"
        /> */}

        {/* <UseRefHook/> */}

        {/* <UseReducer /> */}

        {/* <Post/> */}
        <Form/>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
