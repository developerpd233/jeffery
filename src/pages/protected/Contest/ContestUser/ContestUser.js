import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "../../../../containers";
import { CList, CInput, CListItem, CText, CButton } from "../../../../uiComponents";
import { View  , Image, TouchableOpacity, Dimensions} from "react-native";
import GlobalStyle from "../../../../assets/stylings/GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Styles from '../Contest.Style'
import {CCard} from '../../../../uiComponents'
import { Dots, Profile, ProfileIcon, Send } from "../../../../assets";
import { FlatList } from "react-native-gesture-handler";
import { themes } from "../../../../theme/colors";
const ContestUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showProfile , setShowProfile] = useState(true)

  const headerProps = {
     
      showCart: false,
      headerRightText:    showProfile ? "Pose 2 Post" :'Information'

  };
  const reduxState = useSelector(({ auth, root }) => {
      console.log("🚀 ~ file: Store.js ~ line 25 ~ reduxState ~ root", root);
      return {
          loading: root?.categoryLoading,
          data: [
              {
                  image: require("../../../../assets/images/flowers/one.png"),
                  title: "Monthly Contest",
                  orderNumber:'FROM SEP 02 TO OCT 31',
                  prize:'To Win $11.86 USD, 9 Contestants'
              },
              {
                image: require("../../../../assets/images/flowers/one.png"),
                title: "Monthly Contest",
                orderNumber:'FROM SEP 02 TO OCT 31',
                prize:'To Win $11.86 USD, 9 Contestants'
            },
            {
                image: require("../../../../assets/images/flowers/one.png"),
                title: "Monthly Contest",
                orderNumber:'FROM SEP 02 TO OCT 31',
                prize:'To Win $11.86 USD, 9 Contestants'
            },
            {
                image: require("../../../../assets/images/flowers/one.png"),
                title: "Monthly Contest",
                orderNumber:'FROM SEP 02 TO OCT 31',
                prize:'To Win $11.86 USD, 9 Contestants'
            },
            
           
          ],

          profileData :[
            {key :'Participant Name' , value:'Michael Robert'},
            {key :'Position' , value:'1'},
            {key :'Contest Name' , value:'Video Contest'},
            {key :'Number' , value:'45'},

            {key :'City, State Or Territory' , value:' Bear, Delaware'},
            {key :'Votes' , value:'3'},
            {key :'Close Time' , value:'31 Oct, 2022 00:00 Am'},


          ]
      };
  });

  const select = (item) => {
    navigation.navigate("Contest_Type", {
        item,
    });
};

  const renderItem = ({ item, index }) => {
    return (
        <Image source={ProfileIcon}  style={Styles.ProfileIcon}/>
    );
}; 
const renderImageItem = ({ item, index }) => {
    return (
        <View style={Styles.imgView}>

            <Image source={Profile}  style={Styles.Profile}/>
        </View>
    );
};
const onRefreshHandler = () => {
  // handleCategory();
};

const renderCommentSection = (item , index) =>(
    <View style={[Styles.commentView, {borderBottomColor: 1, 
    }]}>
    <View style={{flexDirection:'row' , alignItems:'center' ,  }}>
        <Image source={ProfileIcon}  style={Styles.commentProfile}/>
        
        <View style={{width:Dimensions.get('window').width*0.57 , height:50 , justifyContent:'center'  , }}>
                <CText style={Styles.commentText}>Lorem Ipsum is simply text . . . . . .  </CText>
    </View>
    <Image source={Dots}  style={[Styles.commentProfile ,{height:15}]} resizeMode='contain' />
        
     </View>

   
</View>
)



const renderProfile  = () =>(
    <View style={{marginVertical:10}}>
       {reduxState.profileData?.map((item)=>{
        return(
            <View style={{flexDirection:'row' , justifyContent:'space-between' , marginHorizontal:15}}>

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

  return (
    <Container
    bottomSpace={true}
    edges={["left", "right"]}
    headerProps={headerProps}
    showPattern={true}
    scrollView={true}
>
        <CCard mainContainer={Styles.cardmainContainer} />
        <CButton buttonStyle={Styles.buttonStyle2}  title='Vote Now' onPress={()=> navigation.navigate("Vote")}/>
        { showProfile ? 
       <>

        <View style={Styles.ListHeaderComponentStyle}>

            <CText style={Styles.listHeaderText}>Recent Voters <CText style={Styles.listVotes}>(07) </CText></CText>
        </View>
 
       
       <FlatList    
        renderItem={renderItem}
        data={reduxState.data}
        horizontal={true}

        contentContainerStyle={[GlobalStyle.list, { marginBottom: 15 ,  height:70 , paddingHorizontal:10 }]} />
        
    
        <View style={Styles.ListHeaderComponentStyle}>
            <CText style={Styles.listHeaderText}>Recent Voters <CText style={Styles.listVotes}>(07) </CText></CText>
        </View>
        <FlatList    
            renderItem={renderImageItem}
            data={reduxState.data}
            numColumns={2}

            contentContainerStyle={[GlobalStyle.list, { marginBottom: 15 ,marginVertical:10 , paddingHorizontal:0 ,paddingBottom:0   }]} 
        />
        <View style={{ marginBottom:90, marginHorizontal: 20 }   }>
            <View style={{flexDirection:'row' , alignItems:'center'}}>

            <TouchableOpacity  style={[Styles.descView]}>
                <CText style={[Styles.desText]}>Description</CText>

            </TouchableOpacity>
            <TouchableOpacity>
                <CText  style={[Styles.desText]}>Details</CText>
            </TouchableOpacity>
            </View>
            <View style={Styles.deccriptionView}>
                    <CText  style={Styles.deccriptionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of. . . . . . . . </CText>
            </View>
            <View style={[Styles.ListHeaderComponentStyle , {marginTop:20, marginHorizontal:-5     }]}>
            <CText style={Styles.listHeaderText}>Comments </CText>
        </View> 
         <View style={[Styles.commentView  ,{
    backgroundColor:themes['light'].colors.white,
    padding:10,
    marginTop:15

         }]}>
            <View style={{flexDirection:'row' , alignItems:'center' }}>
                <Image source={ProfileIcon}  style={Styles.commentProfile}/>
                <View style={Styles.inputView}>

                <View style={{width:Dimensions.get('window').width*0.555 , height:50 ,}}>
                <CInput   
                    placeholder={"Lorem Ipsum is simply text . . . . . . "}
                     value=''
                     inputInnerContainerStyle={{height:50 , flex:1}}
                    />

                </View>
                <View style={{
                    alignItems:'center',
                    justifyContent:'center', 
                      marginVertical:5,
                 backgroundColor: `rgba(255, 255, 255, 0.2)`,}}>

                <Image source={Send}  style={Styles.commentSend} resizeMode='contain'/>
                </View>

                     </View>

                </View>
                {
        reduxState.data?.map((item, index)=>(
            <View style={[Styles.renderComment ,{borderBottomWidth : index === reduxState?.data?.length - 1 ?  0 : 1 ,  }]}>
           { renderCommentSection(item , index)}
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

