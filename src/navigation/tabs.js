import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    HomeStackScreen,
    SearchStackScreen,
    NotificationScreen
} from './stacks';
import { colorGreyLight, colorLightBlack, colorPrimary, colorAccent } from '../constants/Colors';
import { AntDesign, FontAwesome, Fontisto, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AddTweet from '../screens/AddTweet';

const Tabs = createBottomTabNavigator();

const TabsScreens = () => (
    <Tabs.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: colorLightBlack,
            inactiveTintColor: colorGreyLight,
            showLabel: false,
            showIcon: true,
        }}
    >
        <Tabs.Screen
            name="Feed"
            component={HomeStackScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ? <Fontisto name="home" size={size} color={color} />
                        : <Feather name="home" size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ? <FontAwesome name="search" size={size} color={color} />
                        : <AntDesign name="search1" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen
            name="Post"
            component={AddTweet}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="ios-add-circle-outline" size={40} color={colorAccent} />
            }}
        />

        <Tabs.Screen
            name="Notif"
            component={NotificationScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ? <AntDesign name="barschart" size={size} color={color} />
                        : <AntDesign name="barschart" size={size} color={color} />
                )
            }}
        />

        <Tabs.Screen
            name="chat"
            component={NotificationScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ? <MaterialCommunityIcons name="account" size={size} color={color} />
                        : <MaterialCommunityIcons name="account" size={size} color={color} />
                )
            }}
        />
    </Tabs.Navigator>
)

export default TabsScreens;