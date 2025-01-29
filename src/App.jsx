import React from "react";
import Counter1 from "./UseState/classCount";
import Counter from "./UseState/Counter";
import Form from "./UseState/Form";
import Profile from "./UseState/object_form";
import UserName from "./UseState/UserName";
import Password from "./UseState/Password";
import Count from "./UseEffect/Count";
import CompDidUpdate from "./UseEffect/CompDidUpdate";
// import Multiply from "./UseState/Multipletwo";
import Twoinputs from "./UseState/Twoinputs.jsx";
import Inputs from "./UseEffect/Inputs.jsx";
import SwitchCase from "./UseEffect/SwitchCase.jsx";
import ThemeToggle from "./UseEffect/Theme.jsx";
import TodoList from "./UseState/TodoList.jsx";
import Table_Todo from "./UseState/Table_Todo.jsx";
import UserInput from "./UseState/UserInput.jsx";
import StopC from "./UseEffect/StopC.jsx";
import FakeStore from './UseEffect/FakeStore.jsx';
// UseContext method
import PropDriling from "./UseContext/PropDriling.jsx";
function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Counter1/> */}
      {/* <Form /> */}
      {/* <Profile /> */}

      {/* <UserName/> */}
      {/* <Password /> */}

      {/* <Count/> */}
      {/* <CompDidUpdate/> */}
      {/* <Multiply /> */}
      {/* <Twoinputs/> */}
      <TodoList/>
      {/* <Table_Todo/> */}
      {/* <UserInput/> */}
    

      {/* UseEffect */}
      {/* <Twoinputs/> */}
      {/* <Inputs/> */}

      {/* <SwitchCase/> */}
      <ThemeToggle/>

      {/* <FakeStore/> */}
      {/* <StopC /> */}



      {/* UseContext */}
      <PropDriling/>
 
    </>
  );
}

export default App;
