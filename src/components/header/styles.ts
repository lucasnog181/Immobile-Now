import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  contentTitle: {},

  Meet: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.primary,
    fontSize: 20,
  },

  User: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
    fontSize: 25,
  },

  avatarUser: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  

});
