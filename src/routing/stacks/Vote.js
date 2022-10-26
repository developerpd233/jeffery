import * as React from "react";
import {Home, Payment, SubmitVote, Vote} from "../../pages/protected";
import {createStackNavigator} from "@react-navigation/stack";
import { getProfile } from "../../store/actions/Auth.action";
import ProfileStack from "./Profile";

const Stack = createStackNavigator();

const StackScreenOptions = {
    headerShown: false
};

function VoteStack() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={StackScreenOptions}>
            <Stack.Screen name="Vote" component={Vote} />
            <Stack.Screen name="SubmitVote" component={SubmitVote} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Profile" component={ProfileStack} />


        </Stack.Navigator>
    );
}
export default VoteStack;
