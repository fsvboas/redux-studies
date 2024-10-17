import { getVirtualAssistantMessages } from "@/app/services/get-virtual-assistant-messages";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  messageError,
  receivedMessage,
  sendMessage,
  VirtualAssistantResponsesType,
} from "../slice";

function* handleSendMessage(action: ReturnType<typeof sendMessage>) {
  try {
    const response: VirtualAssistantResponsesType[] = yield call(
      getVirtualAssistantMessages
    );

    const foundMessage = response.find(
      (dbMessage: VirtualAssistantResponsesType) =>
        dbMessage.input.toLowerCase() === action.payload.content.toLowerCase()
    );

    if (!foundMessage) {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        content: "Desculpe, não entendi sua mensagem.",
      };

      yield put(receivedMessage(botMessage));
    }
    const botMessage = {
      id: Date.now() + 1,
      sender: "Virtual Assistant",
      content: foundMessage!.response,
    };

    yield put(receivedMessage(botMessage));
  } catch (error) {
    yield put(messageError(`Ocorreu um erro ao buscar uma resposta: ${error}`));
  }
}

export function* watchSendMessage() {
  yield takeEvery(sendMessage.type, handleSendMessage);
}
