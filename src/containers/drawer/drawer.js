import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actions/Authacion';
import {
    Profile01,
    DRcar,
    DRwallet,
    DRnotif,
    DRhistory,
    DRhelp,
    userIcon
} from '../../assets';
import { useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager } from "react-native-fbsdk-next";
import { themes } from '../../theme/colors';
import { logout } from '../../store/actions/Auth.action';
import AntDesign from 'react-native-vector-icons/AntDesign'

     

const Drawer = props => {

    const loginresponce = useSelector(state => state?.authReducer?.user);

    const dispatch = useDispatch();

    const handlLogout = () => {
        props.navigation.closeDrawer();
        dispatch(logout())
        GoogleSignin.signOut()
    };

    return (
        <View style={styles.menuView}>
            <TouchableOpacity style={{alignSelf:'flex-end' ,marginTop:10,marginRight:5}} onPress={()=>{props.navigation.closeDrawer()}}>
             <AntDesign name="close" size={20} color='rgba(255, 255, 255, 0.7)' />
            </TouchableOpacity>
            <View style={styles.ImageView}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('UserProfile')}}>
                <Image source={userIcon} resizeMode='stretch' style={styles.userImage} />

                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.userNam}>User</Text>
                    <Text style={styles.userEmail}>User@mail.com</Text>
                </View>
            </View>

            
            <View style={styles.View2}>
                <TouchableOpacity  onPress={() =>props.navigation.navigate('Contest', {
                screen: 'Contest',
                initial: false
            })} style={styles.btnView}>
                    <Text style={styles.imagetext}>Contests</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Contest',{
                     screen: 'Contest_Type', params: {
                        item: {title:'Country',search:false}
                    }
                })} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>Country</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Contest',{
                     screen: 'Contest_Type', params: {
                        item: {title:'State'}
                    }
                })} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>State</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Contest',{
                     screen: 'Contest_Type', params: {
                        item: {title:'Professions'}
                    }
                })} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>Professions</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Contest',{
                     screen: 'Contest_Type', params: {
                        item: {title:'Contestants'}
                    }
                })} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>Contestants</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Contest',{
                     screen: 'Contest_Type', params: {
                        item: {title:'Winners' , search:true}
                    }
                })} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>Winners</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Favourite')} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Setting')} style={styles.btnView}>
                    <Text style={styles.unSelecttext}>Setting</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlLogout()}>
                    <Text style={styles.signout}>Logout</Text>
                </TouchableOpacity>
            </View>


        </View >
    );
};

const styles = StyleSheet.create({
    menuView: {
        height:Dimensions.get('screen') .height*0.99,
        backgroundColor: themes['light'].colors.drawer,
        borderRightWidth:7,
        borderRightColor:themes['light'].colors.primary


    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    ImageView: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: themes['light'].colors.drawer,
        height: 80,
        marginBottom:10,
        paddingLeft:20,

    },
    userNam: {
        color: themes['light'].colors.tertiary,
        fontFamily:themes.font.medium,
        fontSize: 18,
        fontWeight:'600'
    },
    userEmail: {
        color: themes['light'].colors.tertiary,
        fontSize: 12,
        fontFamily:themes.font.extraLight,
    }, 
    View2: {
        backgroundColor: themes['light'].colors.drawer,
     
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 45,
    },
    image: {
        width: 35,
        height: 35,
    },
    imagetext: {
        color: themes['light'].colors.tertiary,
        fontSize: 14,
        fontFamily:themes.font.extraLight,                           
        marginLeft: 20,
    }, 
    unSelecttext: {
        color: themes['light'].colors.white5,
        fontSize: 14,
        marginLeft: 20,
        fontFamily:themes.font.extraLight,

    },
    signout: {
        color: themes['light'].colors.white5,
        fontSize: 15,
        marginLeft: 20,
        marginTop:10
    },
});
export default Drawer