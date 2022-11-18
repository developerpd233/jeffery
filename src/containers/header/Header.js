import React, { useState } from 'react';
import SafeAreaView from '../safeAreaView/SafeAreaView';
import { View, TouchableOpacity , Image } from 'react-native';
import Styles from './Header.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from '../../assets/icons/CustomIcon';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux";
import {getLayoutDirection} from "../../utils/methods";
import {CInput, CText, ProgressiveImage} from "../../uiComponents";

function Header(props) {

    const navigation = useNavigation();

    const {headerLeft, headerTitle = ' ', headerTitleElement, headerRight = false, backOnPress, style,
    subtitle='',
    placeholder ='',
        showCart = false,
        headerRightText,
        hideBackButton = true,
        backButtonIcon = 'arrow-left2',
        showCenterInput = false,
        goBackWithRoute,
        transparent, theme,
        onRightPress
    } = props;
    const [value , setValue] = useState('')

    const {isLoggedIn} = useSelector(({auth }) => {
        return {
            isLoggedIn: auth.isLoggedIn,
        }
    });
    

    const renderHeaderTitle = (title) => {
        return (
        <View style={{flex:1 , height:60, marginTop:25}}>
        <CText style={[Styles.headerTitleStyle, theme === 'light' && Styles.headerLight]}
                      numberOfLines={1}
                      >
            {title}
            
        </CText>
        <CText style={[Styles.headerSubTitleStyle, theme === 'light' && Styles.headerLight]}
                      numberOfLines={1}
                      >
            {subtitle}
            
        </CText>
                          </View>
        )
    };

    const backPress = () => {
        // if(goBackWithRoute){
        //     navigation.reset({
        //         index: 0,
        //         routes: [{name: 'Home'}],
        //     });
            // navigation.goBack()
            // navigation.navigate(goBackWithRoute);
        // } else
        if (backOnPress){
            backOnPress()
        } else {
            navigation.goBack()
        }

    };


    const backButton = () => {
        return hideBackButton ? (
            <TouchableOpacity style={Styles.headerButton} onPress={() => backPress()}>
                <Icons name={backButtonIcon} style={[Styles.headerButtonIcon,
                    {transform: [{ scaleX: getLayoutDirection() ? -1 : 1 }]}]}/>
            </TouchableOpacity>
        ) : <View style={{minWidth: 24}}/>
    };

    const menuButton = () => {
        return (
            <TouchableOpacity style={Styles.headerButton} 
            // onPress={() => navigation.toggleDrawer()}
            >
                <Image source={require('../../assets/images/logo.png')}  style={Styles.sideLogo}/>
                {/* <AntDesign name="menu" style={Styles.headerButtonIcon}/> */}
            </TouchableOpacity>
        )
    };

    const         cartButton = () => {
        return (
            <TouchableOpacity style={[Styles.headerCartButton, theme === 'light' && Styles.headerCartLight]}
                            //   onPress={() => navigation.navigate('Cart')}
                              >
             <Icons name={"equalizer"} style={[Styles.headerButtonIcon,
                    {transform: [{ scaleX: getLayoutDirection() ? -1 : 1 }]}]}/>
                {/* <Icons name="equalizer"
                           style={[Styles.headerCartButtonIcon, theme === 'light' && Styles.headerLight]}/> */}
            </TouchableOpacity>
        )
    };

    const otherOptionsButton = () => {
        return (
            <View style={[Styles.otherOptions, !showCart && Styles.otherOptionsButtonSpace]}>
                {cartButton() }
            </View>
        )
    };
    const rightText = () => {
        return (
            <TouchableOpacity onPress={onRightPress}>

            <CText  style={[Styles.rightTextStyles, theme === 'light' && Styles.headerLight]}
                      numberOfLines={1}
                      >
            {headerRightText}
            
        </CText>
        </TouchableOpacity>
          
        )
    };
   
    centerInput = () => {
        return (
            <View style={Styles.headerLogo}>
               <CInput
                  placeholder={placeholder}
                  value={value}
                  onChangeText={setValue}
                  inputInnerContainerStyle={Styles.inputInnerContainerStyle}/>
       
            </View>
        )
    };

    return (
        <SafeAreaView style={[Styles.headerStyle, transparent && Styles.headerTransparentStyle, style]} edges={['top']}>
            <View style={[Styles.container, transparent && Styles.headerTransparentStyle]}>
                {headerLeft ? menuButton() : backButton()}
                {showCenterInput ? centerInput() : headerTitleElement ? headerTitleElement() : headerTitle ? renderHeaderTitle(headerTitle ,subtitle) : null}
                {headerRight ? otherOptionsButton() : null}
                {headerRightText ? rightText(headerRightText) : null}

            </View>
        </SafeAreaView>
    );
}

export default React.memo(Header);
