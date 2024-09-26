import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./reducers/userReduce";

const Store = configureStore({
    reducer:{
        user:userReduce,
    }
});

export default Store;
