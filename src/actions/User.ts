import pdos from "../Core";
import PDFSNode from "../store/PDFSNode";

export interface User {
  name?: string;
  profileImageHash?: string;
  expoPushToken?: string;
}

export const updateInfo = async (name?: string, profileImageHash?: string) => {
  const user = pdos().tree.root;

  await user.update({
    name,
    profileImageHash,
  });

  await pdos().tree.root.syncLocalRootHash();
};

export const updatePushToken = async (expoPushToken: string) => {
  const user: PDFSNode = pdos().tree.root;

  await user.update({
    ...user._rawNode.data,
    expoPushToken,
  });
  await pdos().tree.root.syncLocalRootHash();
};

export const getInfo = async (): Promise<User> => {
  const user = await pdos().tree.root;
  return user._rawNode.data;
};
