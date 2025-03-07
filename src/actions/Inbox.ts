import pdos from "../Core";
import PDOSNode from "../store/PDOSNode";
export interface Inbox {
  messages: {
    message: string;
    sender: string;
    sentOn: string;
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
  try {
    await inbox.update({
      unread_messages: [],
      messages: [],
    });
  } catch (e) {
    console.log("error: ", JSON.stringify(e));
  }
};

export const get = async (): Promise<Inbox> => {
  const inbox = pdos().tree.root.edges.e_out_Inbox;
  return mapInbox(inbox);
};

export const getRaw = async () => {
  return pdos().tree.root.edges.e_out_Inbox._rawNode.data.unread_messages;
};

export const add = async (sender: string, message: string) => {
  const inbox = pdos().tree.root.edges.e_out_Inbox;
  let existingMessages = [];
  if (inbox._rawNode.data && inbox._rawNode.data.unread_messages) {
    existingMessages = inbox._rawNode.data.unread_messages;
  }

  const newMessage = {
    message: message,
    sentOn: new Date().toISOString(),
    sender: sender,
  };

  const newMessages = [...existingMessages];
  newMessages.push(newMessage);

  try {
    await inbox.update({
      unread_messages: newMessages,
      messages: [newMessage],
    });
  } catch (e) {
    console.log("error: ", e);
  }
  await pdos().tree.root.syncLocalRootHash();
};
