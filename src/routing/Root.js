import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBar } from "../containers";

import {
    HomeStack,
    ContestStack
} from "./stacks";
import { Favourite } from "../pages/protected";

const Tab = createBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';



// const Root = () =>{
//     const Drawer = createDrawerNavigator();

//   return (
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeStack}  />
//         <Drawer.Screen name="Contest" component={ContestStack} />
//       </Drawer.Navigator>
//   );
// }

  
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
            <Tab.Screen name="Favourite" component={Favourite} />


        </Tab.Navigator>
    );
};

export default Root;