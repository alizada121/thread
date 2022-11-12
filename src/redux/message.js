import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: [
    {
       id:"",
       name: (JSON.parse((localStorage.getItem("message1"))))?(JSON.parse((localStorage.getItem("message1"))).name):'', 
       from: (JSON.parse((localStorage.getItem("message1"))))?(JSON.parse((localStorage.getItem("message1"))).from):'', 
       to: (JSON.parse((localStorage.getItem("message1"))))?(JSON.parse((localStorage.getItem("message1"))).to):'', 
       startDate: (JSON.parse((localStorage.getItem("message1"))))?(JSON.parse((localStorage.getItem("message1"))).startDate):'', 
       subject: (JSON.parse((localStorage.getItem("message1"))))?(JSON.parse((localStorage.getItem("message1"))).subject):'',
       text: (localStorage.getItem('message')) ? (localStorage.getItem('message')):[], draft:false,
       smsText:"",
       template: (JSON.parse((localStorage.getItem("message1"))))?(JSON.parse((localStorage.getItem("message1"))).template):'',
       draft:false,
       mail:false
      }

  ],
  reducers: {
    AddMessage: (state, action) => {
      
      const newMessage = {
        id:Math.floor(Math.random() * 10),
        name: action.payload.name,
        from: action.payload.from,
        to: action.payload.to,
        startDate: action.payload.startDate,
        subject: action.payload.subject,
        text: action.payload.text,
        smsText:action.payload.smsText,
        draft:action.payload.draft,
        template:action.payload.template,
        mail:action.payload.template
      };
   
      state.push(newMessage);
    },
  },
});

export const { AddMessage } = messageSlice.actions;

export default messageSlice.reducer;
