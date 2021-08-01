import { createSlice } from "@reduxjs/toolkit";
import {removeAll} from './todos';

const initialState = {
    list: []
};

export const oneTodoSlice = createSlice({
    name: "oneTodo",

    initialState,

    reducers: {
        add(state) {
            const item = {
                id: 1 + Math.max(0, ...state.list.map((x) => x.id))
            };

            state.list.push(item);
        },


        remove(state, action) {
            state.list = state.list.filter((el) => el.id !== action.payload);
        },

    }
});

export const { add } = oneTodoSlice.actions;

export const remove = (id) => (dispatch) => {
    dispatch(oneTodoSlice.actions.remove(id))
    dispatch(removeAll(id))
}

export default oneTodoSlice.reducer;
