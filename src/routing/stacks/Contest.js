import * as React from "react";
import {Contest, ContestType, ContestTypeDetails, ContestUser, Home, Join} from "../../pages/protected";
import {createStackNavigator} from "@react-navigation/stack";
import VoteStack from "./Vote";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function ContestStack() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={StackScreenOptions}>
            <Stack.Screen name="Contest" component={Contest} />
            <Stack.Screen name="Contest_Type" component={ContestType} />
            <Stack.Screen name="ContestTypeDetails" component={ContestTypeDetails} />
            <Stack.Screen name="ContestUser" component={ContestUser} />
            <Stack.Screen name="Vote" component={VoteStack} />
            <Stack.Screen name="Join" component={Join} />




        </Stack.Navigator>
    );
}
export default ContestStack;
