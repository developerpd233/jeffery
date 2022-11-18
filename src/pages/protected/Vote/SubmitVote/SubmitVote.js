import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton, CCard , CLoading } from "../../../../uiComponents";
import { View, Image } from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import Styles from "../Vote.Styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation , useIsFocused } from "@react-navigation/native";
import { GET_PARTICIPANT_VOTES,ADD_FAVOURITIES ,REMOVE_FAVOURITIES} from "../../../../config/webservices";
import ApiSauce from "../../../../services/networkRequest"
const SubmitVote = (props) => {
    const { user } = props?.route?.params
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    const dispatch = useDispatch();
    const isFocused = useIsFocused()

    const navigation = useNavigation();

    const headerProps = {

        showCart: false,
        headerRightText: 'Vote Submit',


    };

    const reduxState = useSelector(({ auth, root }) => {
        return {
            loading: root?.categoryLoading,
            data: [
                {
                    // image: require("../../../assets/images/flowers/one.png"),
                    title: "Monthly Contest",
                },
                {
                    // // image: require("../../../assets/images/flowers/two.png"),
                    title: "Yearly Contest",
                },
                {
                    // // image: require("../../../assets/images/flowers/two.png"),
                    title: "Video Contest",
                },

            ],
            user:auth?.user
        };
    });

    const select = (item) => {
        navigation.navigate("Contest_Type", {
            item,
        });
    };

    const renderItem = ({ item, index }) => {
        return (
            <CButton
                title={item?.title}
                buttonStyle={Styles.buttonStyle}
                buttonText={Styles.buttonText}
                onPress={() => select(item)}
            />
        );
    };
    const onRefreshHandler = () => {
        // handleCategory();
    };

    useEffect(() => {
        handleApi()
    }, [isFocused])


    const handleApi = async () => {
        try {
            setLoading(true)
            const data = await ApiSauce.getWithToken(GET_PARTICIPANT_VOTES(user) , reduxState?.user?.token)
            setData(data.participant)
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
            {loading && <CLoading loading={loading}/>}
            <CCard
                mainContainer={Styles.cardmainContainer}
                Profile={data?.image}
                userProfile={data?.user?.image}
                Positon={data?.position}
                Votes={data?.vote_count}
                profileName={data?.name}
                heart={data?.favourite}
                FavouriteOnPress={() => { handleFav(data?.id, data?.favourite) }}
            />
            <View style={Styles.userDesc} >
                <CText style={Styles.confirmVote} >Confirm Your Vote</CText>
            </View>
            <View style={[Styles.PrizeView, { marginVertical: 10, padding: 7, marginBottom: 0 }]}>
                <CText style={Styles.voteAmount}>YOU VOTED AMOUNT </CText>
                <CText style={Styles.voteAmount}>$1</CText>
            </View>

            <View style={{ marginVertical: 20, marginHorizontal: 25, justifyContent: 'center', alignSelf: 'center', marginBottom: 90 }} >
                <CText style={Styles.winText}>*All Winning Votes Are Considered A Commitment As Per Rules</CText>
                <CText style={Styles.winText}>* Voting Rules Will Not Allow You To Withdraw Your Votes</CText>
                <CText style={Styles.winText}>* Review Through Terms And Conditions Before Placing Your Vote</CText>
                <CButton onPress={() => {navigation.navigate('Payment')}} title='Submit' buttonStyle={[Styles.buttonStyle, { marginHorizontal: 20, }]} />

            </View>


        </Container>

    )
}
export default SubmitVote

