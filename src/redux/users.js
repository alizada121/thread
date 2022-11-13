import {createSlice} from "@reduxjs/toolkit"

const initialState={
    receiver:JSON.parse(localStorage.getItem('receiver')) ? JSON.parse(localStorage.getItem('receiver')):[],
    customer:JSON.parse(localStorage.getItem('customer')) ? JSON.parse(localStorage.getItem('customer')):[],
}

const users=createSlice({
    name:"users",
    initialState,
    reducers:{
        AddReceiver:(state,action)=>{
            state.receiver.push(action.payload)
        },
        AddCustomer:(state,action)=>{
            state.customer.push(action.payload)
        }
    }
})

export const {AddReceiver}=users.actions;
export const {AddCustomer}=users.actions;

export default users.reducer;
