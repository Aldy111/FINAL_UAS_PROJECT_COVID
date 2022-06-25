import { configureStore } from "@reduxjs/toolkit";
import covidsReducer from "../features/covidsSlice";
import provincesReducer from "../features/provinceSlice";

const store = configureStore({
    reducer : {
        covids : covidsReducer,
        provinces : provincesReducer
    }
})

export default store;