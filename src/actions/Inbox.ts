import pdos from "../Core";
import PDFSNode from "../store/PDFSNode";
export interface Inbox {
  unread_messages: {
    message: string;
    sender: string;
    sentOn: string;
  }[];
}

const mapInbox = (inbox: PDFSNode): Inbox => {
  return {
    unread_messages: inbox._rawNode.data.unread_messages,
  };
};

export const clear = async () => {
  const inbox = pdos().tree.root.edges.e_out_Inbox;
  try {
    await inbox.update({
      unread_messages: [],
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

  const newMessages = [...existingMessages];
  newMessages.push({
    message: message,
    sentOn: new Date().toISOString(),
    sender: sender,
  });

  try {
    await inbox.update({
      unread_messages: newMessages,
    });
  } catch (e) {
    console.log("error: ", e);
  }
  await pdos().tree.root.syncLocalRootHash();
};
