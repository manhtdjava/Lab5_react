import { createStore } from "@reduxjs/toolkit";
const Tang = "Tang";
const Giam = " Giam";
export const tang = () => ({ type: Tang });
export const giam = () => ({ type: Giam });

const initState = {
    dem: 0
};
const demReducer = (state = initState, action) => {
    switch (action.type) {
        case Tang:
            return { ...state, dem: state.dem }
        case Giam:
            return { ...state, dem: state.dem - 1 }
        default: return state
    }
}

const store = createStore(demReducer);
export default store;
