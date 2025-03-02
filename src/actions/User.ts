import pdos from "../Core";

export interface User {
  name?: string;
}

export const updateInfo = async (
  name?: string,
  profileImageBase64?: string,
) => {
  const user = pdos().tree.root;

  await user.update({
    name,
    profileImageBase64,
  });

  await pdos().tree.root.syncLocalRootHash();
};

export const getInfo = async (): Promise<User> => {
  const user = await pdos().tree.root;
  return user._rawNode.data;
};
