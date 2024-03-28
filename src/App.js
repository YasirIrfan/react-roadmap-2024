import React, { useEffect, useState, useCallback, useMemo } from "react";
import ThemeToggle from "./component/10-themeToggle";
import Content from "./component/11-content";
import InputBox from "./component/8-inputBox";
import UseReducer from "./component/12-useReducer";
import MyForm from "./component/18-0-customHookForm";
import Resize from "./component/19-0-resize";
import FormReducer from "./component/13-formReducer";
import TranslationComponent from "./component/6-TranslationComponent";
import UseRefHook from "./component/9-UseRefHook";
import CustomForm from "./component/1-customForm";
import MyButton from "./component/2-composition";
import Post from "./component/14-0-Post";
import Form from "./component/15-0-Form";
// import Navbar from "./component/16-Navbar";
import useFetch from "./component/17-useFetch";
import TodoApp from "./component/20-2-TodoApp";
import "./App.css";
import About from "./component/21-0-About";
import Home from "./component/21-1-Home";
import Login from "./component/21-2-Login";
import Navbar from "./component/21-3-Navbar";
import User from "./component/21-4-User";
import NotFound from "./component/21-5-NotFound";
import Filter from "./component/21-6-Filter";
import Contact from "./component/21-10-Contact";
import Company from "./component/21-7-Company";
import Channel from "./component/21-8-Channel";
import Other from "./component/21-9-Other";



import { BrowserRouter, Router, Routes, Route, createBrowserRouter, RouterProvider, Navigate, useNavigate } from 'react-router-dom'
import { renderIntoDocument } from "react-dom/test-utils";


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

  //#region Custom Hook Example
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  //#endregion

  //#region  useCallback Example

  // const [count, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)
  // const [adjective, setAdjective] = useState("good")

  // whenever component re renders react re creates this function and this is called referential-equality

  // const getAdjective = () => {
  //   return "another"   + count
  // }


  // useCallback only allows react to re create the function when count variable chagnes
  // if other state varibale are changed then it will freez or stop from re creating the function.

  // const getAdjective = useCallback(() => {
  //   return "another" + count
  // }, [count])

  //#endregion

  //#region  useMemo Exmaple

  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);

  // const expensiveCalculation = (num) => {
  //   console.log("Calculating...");
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += 1;
  //   }
  //   return num;
  // };

  // const calculation = useMemo(() => expensiveCalculation(count), []);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };


  //#endregion


  //#region React Router Example using BrowserRouter



  //#endregion

  //#region React Router Example using createBrowserRouter 


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar /><Home /></>
  //   },
  //   {
  //     path: "/login",
  //     element: <><Navbar /><Login /></>
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar /><About /></>
  //   },
  //   {
  //     path: "/user/:username",
  //     element: <><Navbar /><User /></>
  //   },
  //   {
  //     path: "/Filter",
  //     element: <> <Navbar /><Filter/> </>
  //   },
  //   {
  //     path: "/Contact",
  //     element: <> <Navbar /><Contact/> </>
  //   },
  //   {
  //     path: "/*",
  //     element: <> <Navbar /> <NotFound/></>
  //   }
  //   // { 
  //   //   path: "/*",
  //   //   element: <> <Navbar /> {<Navigate to="/" />}</>
  //   // }
  //   // {
  //   //   path: "/*",
  //   //   element: <>{<h1>Not Found</h1>}</>
  //   // }
  // ])

  //#endregion React Router Example using createBrowserRouter 


  return (
    <ThemeContext.Provider value={values}>
      <div className="App">

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="/Filter" element={<Filter />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Contact/" element={<Contact />} >
              <Route path="Company" element={<Company/>} />
              <Route path="Channel" element={<Channel />} />
              <Route path="Other" element={<Other />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <RouterProvider router={router} /> */}

        {/* <TodoApp/> */}

        {/* 
        <>
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
        </> */}


        {/* useMemo Exmaple */}
        {/* <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div> */}

        {/* <CustomForm /> */}
        {/* <MyButton/> */}

        {/* <ThemeToggle /> 
        <Content />   */}

        {/* <InputBox />  */}
        {/* <Resize /> */}
        {/* <MyForm /> */}
        {/* <FormReducer /> */}

        {/* <TranslationComponent
          word="hello"z
          fromLanguage="en"
          toLanguage="fr"
        /> */}

        {/* <UseRefHook/> */}

        {/* <UseReducer /> */}

        {/* <Post/> */}
        {/* <Form/> */}


        {/* <Navbar adjective={"good"} getAdjective={getAdjective} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{getAdjective()}</p> */}

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
