"use client";

import { SendHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, setInputValue } from "../libs/redux/chat/slice";
import { AppDispatch, RootState } from "../libs/redux/chat/store/store";
import { Button } from "./core/button";
import { Input } from "./core/input";

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue } = useSelector((state: RootState) => state.chat);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      sender: "Me",
      content: inputValue,
    };

    dispatch(sendMessage(userMessage));
    dispatch(setInputValue(""));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row w-full space-x-4">
      <Input
        placeholder="Ask something"
        className="text-white rounded-full"
        type="text"
        value={inputValue}
        onChange={(e) => dispatch(setInputValue(e.target.value))}
      />
      <Button
        className="rounded-full bg-white hover:bg-[#f3f3f3] transition-colors duration-300"
        type="submit"
      >
        <SendHorizontal className="text-black/95 h-4 w-4 p-0" />
      </Button>
    </form>
  );
};

export default Form;
