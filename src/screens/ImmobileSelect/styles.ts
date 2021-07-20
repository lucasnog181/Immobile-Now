import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    marginBottom: 90,
  },

  Images: {
    width: "100%",
    height: 270,
    resizeMode: "cover",
    borderRadius: 10,
  },

  ModalImageContainer: {
    marginTop: 40,
    flexDirection: "row",
  },

  ModalImage: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 10,
  },

  HeaderCardHeader: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  HeaderCardTitleName: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.title,
    fontSize: 15,
    width: "70%",
  },

  HeaderCardTitleValue: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.primary,
    fontSize: 14,
  },

  HeaderCardHeaderLocation: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  HeaderCardHeaderLocationText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.text,
    fontSize: 12,
    marginLeft: 5,
  },

  HeaderCardHeaderInformation: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
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

  CardDescription: {
    marginTop: 28,
  },

  CardDescriptionTitle: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.title,
    fontSize: 18,
    marginBottom: 10,
  },

  CardDescriptionDescription: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 13,
  },

  Button: {
    marginTop: 40,
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,

    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  ButtonTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.background,
  },
});
