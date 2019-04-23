import React from 'react';
import {createAppContainer,createStackNavigator,createSwitchNavigator} from "react-navigation";
import EmployeeList from "./Screens/EmployeeList";
import Login from "./Screens/Login";
import AuthLoading from "./Screens/AuthLoading";

export const LoggedInStack = createStackNavigator({
    EmployeeListScreen:EmployeeList
});

export const LoggedOutStack = createStackNavigator({
    LoginScreen:Login
});

export const Router = createSwitchNavigator(
        {
        AuthLoadingScreen:AuthLoading,
        LoggedIn:LoggedInStack,
        LoggedOut:LoggedOutStack
        },
        {
         initialRouteName:'AuthLoadingScreen'   
        }
    );

export default createAppContainer(Router);
