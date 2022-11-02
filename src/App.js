import "./App.css";
import Header from "./my components/Header";
import Todos from "./my components/Todos";
import AddItem from "./my components/addItem";
import About from "./my components/About";

import Footer from "./my components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  const onDelete = (todos) => {
    settodo(
      todo.filter((e) => {
        return e !== todos;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const addItem = (name, address) => {
    let sno;
    if (todo.length === 0) {
      sno = 0;
    } else {
      sno = todo[todo.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      name: name,
      address: address,
    };
    settodo([...todo, myTodo]);
  };
  const [todo, settodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
           exact path="/"
            render={() => {
              return (
                <>
                  <AddItem addItem={addItem} />
                  <Todos todo={todo} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
