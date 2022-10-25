import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {SafeAreaView} from "../index";
import Styles from './TabBar.style';
import Icon from '../../assets/icons/CustomIcon';
import {MappedElement, getLayoutDirection} from "../../utils/methods";
import {themes} from "../../theme/colors";
import {CText} from "../../uiComponents";
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 5;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: getLayoutDirection() ? -tabWidth : tabWidth },
    route2: { x: getLayoutDirection() ? -tabWidth * 2 : tabWidth * 2 },
    route3: { x: getLayoutDirection() ? -tabWidth * 3 : tabWidth * 3 },
    route4: { x: getLayoutDirection() ? -tabWidth * 4 : tabWidth * 4 },
    route5: { x: getLayoutDirection() ? -tabWidth * 5 : tabWidth * 5 },
});

function TabBar(props) {

    const {navigation, state} = props;

    const [stateIndex, updateStateIndex] = useState(0);

    const tabName = ['home', 'Contest' ];

    useEffect(() => {
        let currentRouteName = getCurrentRouteName(state)?.toLowerCase();
        if(tabName.includes(currentRouteName)){
            updateStateIndex(tabName?.indexOf(currentRouteName))
        }
    }, [state]);

    const getCurrentRouteName = (data) => {
        const routeName = data && data.routes[data.index].state
            ? data.routes[data.index].state.routes[data.routes[data.index].state.index].name
            : data ? data.routes[data.index].name : data.params?.screen || 'home';
        return routeName
    };

    const getTabBarVisibility = (data) => {
        return true;
    };

    const routes = [
        {
            name: 'Home',
            key: 'home',
            icon: 'home',
            onPress: () => navigation.navigate('Home'),
            fontSize: 22,
            marginTop: -40
        },
        {
            name: 'Contest',
            key: 'Contest',
            icon: 'list2',
            
            onPress: () => navigation.navigate('Contest', {
                screen: 'Contest',
                initial: false
            }),
            fontSize: 22
        },
        {
            name: 'Cart',
            key: 'cart',
            icon: 'download',
            // onPress: () =>  navigation.navigate('Cart', {
            //     screen: 'cart',
            //     initial: false
            // }),
            // onPress: () =>  navigation.navigate('Cart'),
            fontSize: 22
        },
        {
            name: 'Location',
            key: 'location',
            icon: 'heart',
            // onPress: () => navigation.navigate('Location'),
            fontSize: 22
        },
        
    ];

    if(!getTabBarVisibility(state)) { return null }

    return (
        <SafeAreaView edges={['left', 'right', 'bottom']}
                      style={Styles.tabContainer}>

            <View style={Styles.absoluteFillObject}>
                <SpotLight style={[Styles.spotLight, {width: tabWidth}]} pose={`route${state?.index}`}>
                    {/* <View style={Styles.spotLightInner}>
                    </View> */}
                </SpotLight>
            </View>

            <View style={Styles.tabInnerContainer}>
                <MappedElement
                    data={routes}
                    renderElement={(route, i) => {
    console.log("🚀 ~ file: TabBar.js ~ line 86 ~ TabBar ~ state", state)

                        const isRouteActive = route?.key === getCurrentRouteName(state)?.toLowerCase();
                        return (
                            <TouchableOpacity key={i} onPress={route.onPress} style={Styles.tab}>
                                <Icon name={route.icon}
                                           style={[Styles.tabIcon, {
                                               fontSize: route?.fontSize,
                                               color: isRouteActive ? themes['light'].colors.tertiary : themes['light'].colors.white4
                                           }]} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

        </SafeAreaView>
    );
}

export default React.memo(TabBar)
