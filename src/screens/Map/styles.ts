import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 180;
const CARD_WIDTH = width * 0.9;
const SPACING_FOR_CARD_INSET = 10;

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  mapView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  placesContainer: {
    width: "100%",
    maxHeight: 200,
  },

  place: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginHorizontal: 8,
    padding: 20,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",

    flexDirection: "row",
    alignItems: "center",
  },

  thumbnail: {
    width: 140,
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },

  cardHeader: {
    width: "55%",
    marginLeft: 10,
  },

  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },

  MarkerStyles: {
    width: 30,
    height: 30,
  },

  cardBody: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  cardBodyText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginLeft: 5,
  },

  cardFooter: {
    marginTop: 12,
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
