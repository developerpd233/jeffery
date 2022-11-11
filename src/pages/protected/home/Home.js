import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../containers";
import { CList, CInput, CListItem, CText, CButton, CLoading } from "../../../uiComponents";
import { View } from "react-native";
import GlobalStyle from "../../../assets/stylings/GlobalStyle";
import Styles from "./Home.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AuthStyle from "../../auth/Auth.style";
import ApiSauce from "../../../utils/network";
import { HOME_CONTEST } from "../../../config/webservices"
import { ScrollView } from "react-native-gesture-handler";
const Home = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState()
    const [month, setMonth] = useState()
    const [annaul, setAnnaul] = useState()
    const [video, setVideo] = useState()
    const [Loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const headerProps = {
        headerTitle: "Store",
        showCart: false,
        headerLeft: true,
        headerRight: true,
        showCenterInput: true,
        placeholder: 'Search Participant....'

    };

    const reduxState = useSelector(({ auth, root }) => {
        console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
        return {
            loading: root?.categoryLoading,
            data: [
                {
                    // image: require("../../../assets/images/flowers/one.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // // image: require("../../../assets/images/flowers/two.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // // image: require("../../../assets/images/flowers/three.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // // image: require("../../../assets/images/flowers/four.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // // image: require("../../../assets/images/flowers/five.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // // image: require("../../../assets/images/flowers/six.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // // image: require("../../../assets/images/flowers/five.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // image: require("../../../assets/images/flowers/six.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // image: require("../../../assets/images/flowers/six.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // image: require("../../../assets/images/flowers/six.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },
                {
                    // image: require("../../../assets/images/flowers/six.png"),
                    title: "Boys Monthly Contest",
                    prize: "$ 0.43"
                },

            ],
        };
    });
    const renderItem = ({ item, index }) => {
        return (
            <CListItem
                title={`${item?.title} Monthly Contest`}
                titleStyles={Styles.title}
                price={item?.amount}
                priceStyle={Styles.price}
                onPress={() => props.navigation.openDrawer()}
            />
        );
    };

    const renderItemOne = ({ item, index }) => {
        return (
            <CListItem
                title={`${item?.title}`}
                titleStyles={Styles.title}
                price={item?.amount}
                priceStyle={Styles.price}
                onPress={() => props.navigation.openDrawer()}
            />
        );
    };

    const onRefreshHandler = () => {
        // handleCategory();
    };

    useEffect(() => {
        handleContest()
    }, [])

    const handleContest = async () => {
        try {
            setLoading(true)
            const data = await ApiSauce.getWithoutToken(HOME_CONTEST)
            setData(data.data)
            setMonth(data.data.monthly_contests)
            setAnnaul([data.data.annual_contest , data.data.video_contest ])

        } catch (err) {
            console.log("🚀 ~ file: ContestType.js ~ line 33 ~ handleApi ~ err", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container
            bottomSpace
            edges={["left", "right"]}
            headerProps={headerProps}
            showPattern={true}

        >
            {Loading && <CLoading />}

            <View style={Styles.container}>
                <CText style={Styles.normalTitle}>
                    Are You One In A <CText style={Styles.normalSubTitle}>
                        Million?

                    </CText>

                </CText>
                <CText style={Styles.text}>
                    Are You Beautiful And Sexy And
                    You Know It ?
                </CText>

                <CButton title='Join the Contest' />

            </View>
            <ScrollView>

            <CList
                style={Styles.list }
                numColumns={2}
                contentContainerStyle={[GlobalStyle.list, { paddingBottom: 0 }]}
                data={annaul}
                loading={reduxState.loading}
                renderItem={renderItemOne}
                keyExtractor={(item, index) => index.toString()}
                emptyOptions={{
                    // icon: require('../../assets/images/empty.png'),
                    text: "Store not found",
                }}
                onRefreshLoading={reduxState.loading}
                onRefreshHandler={() => onRefreshHandler()}
                // onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
            <CList
                style={Styles.list}
                numColumns={2}
                contentContainerStyle={[GlobalStyle.list, { paddingBottom: 115, }]}
                data={month}
                loading={reduxState.loading}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                emptyOptions={{
                    // icon: require('../../assets/images/empty.png'),
                    text: "Store not found",
                }}
                onRefreshLoading={reduxState.loading}
                onRefreshHandler={() => onRefreshHandler()}
                // onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
           
           </ScrollView>
            
        </Container>
    )
}

export default Home

