import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../../uiComponents";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from '../Contest.Style'
import { CCard } from '../../../../uiComponents'
import { Dots, Profile, ProfileIcon, Send, Video } from "../../../../assets";
import { FlatList } from "react-native-gesture-handler";
import { themes } from "../../../../theme/colors";
import { GET_PARTICIPANT_VOTES, IMAGE_URL ,POST_COMMENTS ,GET_COMMENTS ,ADD_FAVOURITIES ,REMOVE_FAVOURITIES} from "../../../../config/webservices";
import ApiSauce from "../../../../services/networkRequest"
import VideoPlayer from 'react-native-video-player';

const ContestUser = (props) => {
    const dispatch = useDispatch();

    const { item , contestType } = props?.route?.params || {}
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    console.log("🚀 ~ file: ContestUser.js ~ line 23 ~ ContestUser ~ data", data)
    const [comment, setComment] = useState('')
    const [commentData, setCommentData] = useState()
    const navigation = useNavigation();
    const [showProfile, setShowProfile] = useState(true)
    const reduxState = useSelector(({ auth }) => {
        return {
            isLoggedIn: auth.isLoggedIn,
            user: auth?.user,
        };
    });

    const headerProps = {
        showCart: false,
        headerRightText: showProfile ? "Pose 2 Post" : 'Information'
    };
   
    const select = (item) => {
        navigation.navigate("Contest_Type", {
            item,
        });
    };

    const renderItem = ({ item, index }) => {
        return (
            <Image source={item?.user?.avatar ? { uri: IMAGE_URL + item?.user?.avatar } : Profile} style={Styles.ProfileIcon} />
        );
    };

    const renderImageItem = ({ item }) => {
        return (
            <View style={item.title === 'Video Contest' ? Styles.videoView : Styles.imgView}>
                <Image source={item.title !== 'Video Contest' ? { uri: IMAGE_URL + item } : Video} style={item.title === 'Video Contest' ? Styles.video : Styles.Profile} />
            </View>
        );
    };

    const onRefreshHandler = () => {
        handleApi()
        getComments() // handleCategory();
    };

    const renderCommentSection = (item, index) => (
        <View style={[Styles.commentView, {
            borderBottomColor: 1,
        }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image source={item?.user?.avatar ? {uri :IMAGE_URL+ item?.user?.avatar } : ProfileIcon} style={Styles.commentProfile} />

                <View style={{ width: Dimensions.get('window').width * 0.55, height: 50, justifyContent: 'center', }}>
                    <CText style={Styles.commentText}>{item?.comment}</CText>
                </View>
                <Image source={Dots} style={[Styles.commentProfile, { height: 15 ,borderRadius:0 }]} resizeMode='contain' />
            </View>


        </View>
    )
    const renderProfile = () => (
        <View style={{ marginVertical: 10 }}>
            {reduxState.profileData?.map((item) => {
                return (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>

                        <CText style={Styles.ProfileText}>
                            {item.key}
                        </CText>
                        <CText style={Styles.ProfileText}>
                            {item.value}

                        </CText>
                    </View>
                )
            })}
        </View>
    )

    useEffect(() => {
        handleApi()
        getComments()
    }, [])


    const handleApi = async () => {
        try {
            setLoading(true)
            const data = await ApiSauce.getWithToken(GET_PARTICIPANT_VOTES(item?.id) , reduxState?.user?.token)
            setData(data.participant)
        } catch (err) {
            console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        } finally {
            setLoading(false)
        }
    }

    const getComments = async () => {
        try {
            setLoading(true)
            const data = await ApiSauce.getWithToken(GET_COMMENTS(item?.id , '1') , reduxState?.user?.token)
            setCommentData(data.comments.data)
        } catch (err) {
            console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        } finally {
            setLoading(false)
        }
    }

    const postComments = async () => {
        const formData = new FormData()
        formData.append('participant_id' , item?.id)
        formData.append('user_id' , reduxState?.user?.user?.id)
        formData.append('comment' , comment)
        try {
            setLoading(true)
            const data = await ApiSauce.postWithToken(POST_COMMENTS , formData , reduxState?.user?.token)
            setComment('')
            getComments()
        } catch (err) {
            console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        } finally {
            setLoading(false)
        }
    }
    const handleFav =async (id ,favourite) => {
        try {
          setLoading(true)
          if(favourite == false ){
            const data = await ApiSauce.getWithToken(ADD_FAVOURITIES(id) , reduxState?.user?.token)
          }
          else{
            const data = await ApiSauce.getWithToken(REMOVE_FAVOURITIES(id) , reduxState?.user?.token)
          }
        } catch (err) {
          console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        } finally {
          handleApi()
          setLoading(false)
        }
      }
    return (
        <Container
            bottomSpace={true}
            edges={["left", "right"]}
            headerProps={headerProps}
            showPattern={true}
            scrollView={true}
        >
            {loading && <CLoading loading={loading} />}
            <CCard
                mainContainer={Styles.cardmainContainer}
                Profile={data?.image}
                userProfile={data?.user?.image}
                Votes={data?.vote_count}
                Positon={data?.position}
                profileName={data?.name}
                heart={data?.favourite}
                FavouriteOnPress={()=>{handleFav(data?.id , data?.favourite)}}
            />
            <CButton buttonStyle={Styles.buttonStyle2} title='Vote Now' onPress={()=>{props.navigation.navigate("Vote",{screen: 'Vote', params: { user: item?.id }})}} />
          
            {showProfile ?
                <>
                    <View style={Styles.ListHeaderComponentStyle}>
                        <CText style={Styles.listHeaderText}>Recent Voters <CText style={Styles.listVotes}>{`(${data?.votes?.length})`} </CText></CText>
                    </View>
                    <FlatList
                        renderItem={renderItem}
                        data={data?.votes}
                        horizontal={true}
                        contentContainerStyle={[GlobalStyle.list, { marginVertical: 10, height: 70, paddingHorizontal: 10 }]}
                    />
                    <View style={Styles.ListHeaderComponentStyle}>
                        <CText style={Styles.listHeaderText}>{contestType?.title === 'Video Contest' ? 'Video' : 'Images'} <CText style={Styles.listVotes}>({ contestType?.title  === 'Video Contest'?'1':JSON.parse(data?.images ? data?.images : null)?.length})</CText></CText>
                    </View>
                    {contestType?.title === 'Video Contest' ?
                   
                    <VideoPlayer
                    video={{ uri:   IMAGE_URL + data?.video }}
                    // videoWidth={300}
                    style={{marginVertical:20 , marginHorizontal:100 , alignSelf:'center' , width:Dimensions.get('screen').width*1 , height:220}}
                    // videoHeight={300}
                    thumbnail={{ uri: IMAGE_URL +data?.video_thumbnail }}
                />
                            
        :                        
        <FlatList
                                numColumns={contestType?.title === 'Video Contest' ? 1 : 2}
                        renderItem={renderImageItem}
                        data={JSON.parse(data?.images ? data?.images : null)}
                        contentContainerStyle={[GlobalStyle.list, { marginBottom: 25, marginVertical: 10, paddingHorizontal: 0, paddingBottom: 0 }]}
                    />}
                    <View style={{ marginBottom: 90, marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={[Styles.descView]}>
                                <CText style={[Styles.desText]}>Description</CText>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CText style={[Styles.desText]}>Details</CText>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.deccriptionView}>
                            <CText style={Styles.deccriptionText}>{data?.description}</CText>
                        </View>
                        <View style={[Styles.ListHeaderComponentStyle, { marginTop: 20, marginHorizontal: -5 }]}>
                            <CText style={Styles.listHeaderText}>Comments </CText>
                        </View>
                        <View style={[Styles.commentView, {
                            backgroundColor: themes['light'].colors.white,
                            padding: 10,
                            marginTop: 15

                        }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={data?.user?.image ? {uri : data?.user?.image} : ProfileIcon} resizeMode='contain' style={Styles.commentProfile} />
                                <View style={Styles.inputView}>

                                    <View style={{ width: Dimensions.get('window').width * 0.555, height: 50, }}>
                                        <CInput
                                            placeholder={"Lorem Ipsum is simply text . . . . . . "}
                                            value={comment}
                                            inputInnerContainerStyle={{ height: 50, flex: 1 }}
                                            onChangeText={(e, unmasked)=>{setComment(e)}}
                                        />

                                    </View>
                                    <TouchableOpacity style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginVertical: 5,
                                        backgroundColor: `rgba(255, 255, 255, 0.2)`,
                                    }} onPress={()=>{postComments()}}>
                                        <Image source={Send} style={Styles.commentSend} resizeMode='contain' />
                                    </TouchableOpacity>

                                </View>

                            </View>
                            {
                                commentData?.map((item, index) => (
                                    <View style={[Styles.renderComment, { borderBottomWidth: index === reduxState?.data?.length - 1 ? 0 : 1, }]}>
                                        {renderCommentSection(item, index)}
                                    </View>
                                ))
                            }
                        </View>


                    </View>
                </>
                : renderProfile()}




        </Container>
    )
}
export default ContestUser

