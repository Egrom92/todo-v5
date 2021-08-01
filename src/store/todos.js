import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const todosSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    add(state, action) {
      const item = {
        text: action.payload.content,
        list: action.payload.list,
        completed: false,
        id: 1 + Math.max(0, ...state.items.map((x) => x.id))
      };

      state.items.push(item);
    },

    doneToggle(state, action) {
      const item = state.items.find((x) => x.id === action.payload);

      if (item) {
        item.completed = !item.completed;
      }
    },

    remove(state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },

    removeAll(state, action) {
      const listId = action.payload
      state.items = state.items.filter(item => item.list !== listId)
    },

    edit(state, action) {
      const item = state.items.find((x) => x.id === action.payload.id);

      if (item) {
        item.text = action.payload.text;
      }
    }
  }
});

export const { add, doneToggle, remove, removeAll, edit } = todosSlice.actions;

export default todosSlice.reducer;
