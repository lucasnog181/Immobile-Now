import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../screens/LoginScreen';

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
        </Stack.Navigator>

    )
}