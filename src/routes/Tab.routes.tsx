
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';

import { Home } from '../screens/Home';
import Map from '../screens/Map';
import { Profile } from '../screens/Profile';

const AppTab = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.primary,
                inactiveTintColor: theme.colors.text,
            }}
        >
            <AppTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <AntDesign
                            name="appstore-o"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <AppTab.Screen
                name="Explorer"
                component={Map}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="map-marker-circle"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <AppTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Ionicons
                            name="person-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />


        </AppTab.Navigator>
    )
}