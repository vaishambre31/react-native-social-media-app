import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackScreen } from './stacks';
import TabsScreens from './tabs';


const RootStack = createStackNavigator();
const RootStackScreen = ({ token }) => (
    <NavigationContainer>
        <RootStack.Navigator headerMode="none">
            {
                token
                    ? (
                        <RootStack.Screen name="App" component={TabsScreens} />
                    )
                    : (
                        <RootStack.Screen name="Auth" component={AuthStackScreen} />
                    )
            }
        </RootStack.Navigator>
    </NavigationContainer>
)

export default RootStackScreen