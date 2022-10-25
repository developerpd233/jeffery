import * as React from "react";
import {Home, Vote} from "../../pages/protected";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function VoteStack() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={StackScreenOptions}>
            <Stack.Screen name="Vote" component={Vote} />
        </Stack.Navigator>
    );
}
export default VoteStack;
