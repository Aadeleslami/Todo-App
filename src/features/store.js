import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
configureStore({
    todos: todoReducer
})