import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import oneTodoReducer from "./oneTodo";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    oneTodo: oneTodoReducer
  }
});

export default store;
