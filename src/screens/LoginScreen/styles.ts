import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const { width, height } = Dimensions.get("window");

export const sx = StyleSheet.create({
  Background: {
    width: width,
    flex: 1,
  },

  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 90,
  },

  logo: {
    width: 194,
    height: 60,
  },

  content: {},

  Title: {
    fontSize: 30,
    color: "#FFFF",
    fontFamily: theme.fonts.title600,
  },

  ButtonGoogle: {
    marginTop: 40,
    backgroundColor: "#FFFF",
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 4,
  },

  ImagesGoogle: {
    width: 30,
    height: 30,
    marginRight: 15,
  },

  TitleButton: {
    fontSize: 14,
  },
});
