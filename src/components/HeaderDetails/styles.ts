import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  containerHeaserDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  Button: {
    width: 50,
    height: 50,

    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.text,
    fontSize: 16,
  },
});
