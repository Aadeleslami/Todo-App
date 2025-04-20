import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  todos: [],
  error: "",
};
const api = axios.create({
  baseURL: "http://localhost:5000",
});
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/todos", {
        title: payload.title,
        id: Date.now(),
        completed: false,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await api.delete(`/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const toggleAsyncTodo = createAsyncThunk(
  "todo/toggleAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`/todos/${payload.id}`, {
        completed: !payload.completed,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state) => {
        state.loading = true;
        state.todos = [];
        state.error = "";
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.loading = false;
        state.todos = [];
        state.error = action.payload;
      })
      .addCase(addAsyncTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAsyncTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })

      .addCase(deleteAsyncTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      }).addCase(toggleAsyncTodo.fulfilled,(state,action)=>{
        state.loading = false ;
        state.todos = action.payload
        const selectedTodo = state.todos.find(todo => todo.id === action.payload.id)
        selectedTodo.completed = !selectedTodo.completede
      });
  },
});
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
