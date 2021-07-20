import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  cardContainer: {
    marginHorizontal: 20,
    width: "90%",
    height: 350,
    backgroundColor: "#FFFF",
    marginTop: 25,
  },
  thumbnailCard: {
    width: "100%",
    height: 200,
  },

  ViewCardRecommended: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  CardRecommendTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.title600,
    color: theme.colors.title,
  },

  CardRecommendMore: {
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.text,
  },
});
