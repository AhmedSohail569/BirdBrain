import {useColorScheme} from "react-native";
import {lightTheme} from "./lightTheme";
import {darkTheme} from "./darkTheme";

export const useAppTheme = () => {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
};
