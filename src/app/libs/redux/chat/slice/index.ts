import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserMessageType = {
  id: number;
  sender: string;
  content: string;
};

export type VirtualAssistantResponsesType = {
  id: number;
  input: string;
  response: string;
};

interface ChatState {
  inputValue: string;
  messages: UserMessageType[];
  status: "idle" | "pending" | "error";
  error: string | null;
}

const initialState: ChatState = {
  inputValue: "",
  messages: [],
  status: "idle",
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    sendMessage: (state, action: PayloadAction<UserMessageType>) => {
      state.messages.push(action.payload);
      state.status = "pending";
      state.error = null;
    },
    receivedMessage: (state, action: PayloadAction<UserMessageType>) => {
      state.messages.push(action.payload);
      state.status = "idle";
    },
    messageError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { setInputValue, sendMessage, receivedMessage, messageError } =
  chatSlice.actions;

export default chatSlice.reducer;
