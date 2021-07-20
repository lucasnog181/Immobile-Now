import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    height: 130,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  thumbnailImage: {
    width: 150,
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 20,
    marginRight: 12,
  },

  ButtonHeader: {
    width: "50%",
  },

  LocationImmobile: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  LocationImmobileText: {
    marginLeft: 3,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 13,
  },
  CardFooter: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  CardFooterItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },

  CardBodyText: {
    marginLeft: 10,
    fontFamily: theme.fonts.text500,
    color: theme.colors.text,
  },
});
