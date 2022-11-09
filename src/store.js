import { configureStore } from "@reduxjs/toolkit"
import users from "./redux/users"
import message from "./redux/message";

const store=configureStore({
    reducer:{
        users:users,
        message:message
    }
})

export default store;