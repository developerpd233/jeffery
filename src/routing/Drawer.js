import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ContactStackNavigator } from "./StackNavigator";
import Root from "./Root";
import { CustomDrawer } from "../containers";
import { useWindowDimensions } from 'react-native';
import { ContestStack } from "./stacks";
import { Favourite, Setting  ,ProfileScreen , UserProfile} from "../pages/protected";
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.2;

  return (
    <DrawerContentScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} {...props}>
      <CustomDrawer {...props} />
    </DrawerContentScrollView>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator defaultStatus="closed"  
    screenOptions={{
      headerShown: false,
      drawerType: 'front',
      swipeEdgeWidth: 0,
      swipeEnabled: false,
      drawerStyle: {
        width: 200,
      },
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
           <Drawer.Screen name="Home" component={Root} />
           <Drawer.Screen name="Contest" component={ContestStack} />
           <Drawer.Screen name="Favourite" component={Favourite} />
           <Drawer.Screen name="Setting" component={Setting} />
           <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
           <Drawer.Screen name="UserProfile" component={UserProfile} />



    </Drawer.Navigator>
  );
}

export default DrawerNavigator;