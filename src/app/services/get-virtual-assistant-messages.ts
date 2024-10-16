import { api } from "../libs/axios/api";
import { VirtualAssistantResponsesType } from "../libs/redux/chat/slice";

export async function getVirtualAssistantMessages() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data } = await api.get<VirtualAssistantResponsesType[]>(
      "/messages"
    );
    return data;
  } catch (error) {
    throw error;
  }
}
