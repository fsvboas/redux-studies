import { useSelector } from "react-redux";
import { RootState } from "../libs/redux/chat/store/store";
import { Show } from "./core/show";

const ChatHistory = () => {
  const { messages, status, error } = useSelector(
    (state: RootState) => state.chat
  );

  return (
    <>
      {messages.map((message) => (
        <div key={message.id} className="text-white">
          <strong
            className={`${
              message.sender !== "Me" ? "text-red-400" : "text-blue-400"
            }`}
          >
            {message.sender}:
          </strong>{" "}
          {message.content}
        </div>
      ))}
      <Show when={status === "pending"}>
        <div className="text-white">Assistant is thinking...</div>
      </Show>
      <Show when={status === "error"}>
        <div className="text-red-500">{error}</div>
      </Show>
    </>
  );
};

export default ChatHistory;
