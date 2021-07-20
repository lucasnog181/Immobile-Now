import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  CardRecommend: {
    width: "90%",
    height: 350,
    marginHorizontal: 20,
    backgroundColor: "#FFFF",
    borderRadius: 10,
  },

  thumbnailImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  container: {
    padding: 10,
  },

  CardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  TitleImmobile: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.title,
    fontSize: 15,
    width: 200,
  },

  VelueImmobile: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.primary,
    fontSize: 15,
  },

  CardBody: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  LocationImmobile: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: theme.colors.text,
    marginLeft: 6,
  },

  CardFooter: {
    marginTop: 20,
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
