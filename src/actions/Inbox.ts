import pdos from "../Core";
import PDOSNode from "../tree/base/PDOSNode";
export interface Inbox {
  messages: {
    message: string;
    sender: string;
    sentOn: string;
    action: string;
  }[];
  unread_messages: {
    message: string;
    sender: string;
    sentOn: string;
  }[];
}

const mapInbox = (inbox: PDOSNode): Inbox => {
  return {
    unread_messages: inbox._rawNode.data.unread_messages,
    messages: inbox._rawNode.data.messages,
  };
};

export const clear = async () => {
  const inbox = pdos().tree.root.edges.e_out_Inbox;
  await inbox.update({
    unread_messages: [],
    messages: [],
  });
};

export const get = async (): Promise<Inbox> => {
  const inbox = pdos().tree.root.edges.e_out_Inbox;
  return mapInbox(inbox);
};

export const getRaw = async () => {
  return pdos().tree.root.edges.e_out_Inbox._rawNode.data.unread_messages;
};

export const add = async (sender: string, message: string, action: string) => {
  const inbox = await pdos().tree.root.edges.e_out_Inbox;
  let existingUnreadMessages = [];
  if (inbox._rawNode.data && inbox._rawNode.data.unread_messages) {
    existingUnreadMessages = inbox._rawNode.data.unread_messages;
  }

  let existingMessages = [];
  if (inbox._rawNode.data && inbox._rawNode.data.messages) {
    existingMessages = inbox._rawNode.data.messages;
  }

  const newMessage = {
    message: message,
    sentOn: new Date().toISOString(),
    sender: sender,
    action: action,
  };

  existingMessages = existingMessages.filter((m: any) => m.sender !== sender);
  existingMessages.push(newMessage);

  try {
    await inbox.update({
      unread_messages: existingUnreadMessages,
      messages: existingMessages,
    });
  } catch (e) {
    console.log("error: ", e);
  }
  await pdos().tree.root.push();
};
