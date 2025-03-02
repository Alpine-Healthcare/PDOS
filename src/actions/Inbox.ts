import pdos from "../Core";

export interface Inbox {
  unread_messages: {
    message: string;
    sender: string;
    sentOn: string;
  }[];
}

export const clearMessages = async () => {
  await pdos().tree.root.edges.e_out_Inbox.clearMessages();
};

export const get = async (): Promise<Inbox> => {
  return pdos().tree.root.edges.e_out_Inbox._rawNode.data;
};

export const getMessages = async () => {
  return pdos().tree.root.edges.e_out_Inbox._rawNode.data.unread_messages;
};

export const addMessage = async (sender: string, message: string) => {
  await pdos().tree.root.edges.e_out_Inbox.addMessage(sender, message);
};
