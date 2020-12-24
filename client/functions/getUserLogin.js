import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_LOGIN = "@user_login";

export const getUserLogin = async () => {
  let storageUser = await AsyncStorage.getItem(USER_LOGIN);
  storageUser = JSON.parse(storageUser);
  return storageUser;
};
