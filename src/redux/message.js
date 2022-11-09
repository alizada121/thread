import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: [
    { name: "", from: "", to: "", startDate: "", subject: "", text: [] },
  ],
  reducers: {
    AddMessage: (state, action) => {
      const newMessage = {
        name: action.payload.name,
        from: action.payload.from,
        to: action.payload.to,
        startDate: action.payload.startDate,
        subject: action.payload.subject,
        text: action.payload.text,
      };
      state.push(newMessage);
    },
  },
});

export const { AddMessage } = messageSlice.actions;
export default messageSlice.reducer;
