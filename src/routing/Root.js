import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBar } from "../containers";

import {
    HomeStack,
    ContestStack
} from "./stacks";

const Tab = createBottomTabNavigator();




  
const Root = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false ,  tabBarStyle: {
                paddingTop:10,
                backgroundColor: 'transparent',
             
            }, }}
            tabBar={(props) =>  <TabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Contest" component={ContestStack} />

        </Tab.Navigator>
    );
};

export default Root;