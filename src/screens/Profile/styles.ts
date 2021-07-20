import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const sx = StyleSheet.create({
  containerProfile: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  profileHeader: {
    flexDirection: "row",
  },

  profileUserAvatar: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },

  profileHeaderText: {
    marginTop: 10,
    marginLeft: 13,
  },

  profileHeaderNameUser: {
    fontFamily: theme.fonts.title600,
    color: theme.colors.title,
    fontSize: 20,
  },

  profileHeaderEmailUser: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    fontSize: 14,
  },

  profileBody: {},

  ButtonItem: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ButtonItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  ButtonItemIcon: {
    backgroundColor: "#E3E6F0",
    padding: 10,
    borderRadius: 5,
  },

  ButtonItemText: {
    fontFamily: theme.fonts.text500,
    color: "#31394C",
    marginLeft: 5,
    fontSize: 16,
  },

  ButtonLogout: {
    marginTop: 90,
    borderColor: "#000000",
    borderWidth: 1,
    padding: 15,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
