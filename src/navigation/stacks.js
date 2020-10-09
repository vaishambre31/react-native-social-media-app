import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notification from "../screens/Notification";
import Header from "../components/Header";
import TweetDetails from '../screens/TweetDetails';

//authentication stack
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
);

//Home screen stack --> contains screen to rediret from home
const HomeStack = createStackNavigator();
const HomeStackScreen = (props) => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={Home}
            options={{
                header: () => <Header {...props} title="Feed" />
            }}
        />
        <HomeStack.Screen
            name="Tweet_details"
            component={TweetDetails}
            options={{
                headerTitle: "Tweet"
            }}
        />
    </HomeStack.Navigator>
);

//Search screen stack
const SearchStack = createStackNavigator();
const SearchStackScreen = (props) => (
    <SearchStack.Navigator>
        <SearchStack.Screen
            name="search"
            component={Search}
            options={{
                headerShown: false
            }}
        // options={{
        //     header: () => <Header {...props} title="Search" />
        // }}
        />
    </SearchStack.Navigator>
)

//notification stcak
const NotifStack = createStackNavigator();
const NotificationScreen = () => (
    <NotifStack.Navigator>
        <NotifStack.Screen name="Charts" component={Notification} />
    </NotifStack.Navigator>
)


export {
    AuthStackScreen,
    HomeStackScreen,
    SearchStackScreen,
    NotificationScreen,
}