import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { TabRoutes } from "./Tab.routes";
import { ImmobileSelect } from "../screens/ImmobileSelect";
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

export function AuthRoutes() {

    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="HomeScreen"
                component={TabRoutes}
            />
            <Stack.Screen
                name="ImmobileSelectScreen"
                component={ImmobileSelect}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>

    )
}