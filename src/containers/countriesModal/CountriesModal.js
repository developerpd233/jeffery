import React, {useEffect, useState} from "react";
import {TouchableOpacity, View} from "react-native";
import GlobalStyle from "../../assets/stylings/GlobalStyle";
import {useSelector} from "react-redux";
import {CInput, CList, CText, ProgressiveImage} from "../../uiComponents";
import Styles from "./CountriesModal.style";

function CountriesModal(props) {

    const {onSelect , data} = props;

    const [searchText, updateSearchText] = useState('');
    const [filteredCountry, updateFilteredCountry] = useState(data);
    const [loading, setLoading] = useState(true);

    const reduxState = useSelector(({global}) => {
        return {
            data: global.allCountries,
            currentCountry: global.currentCountry,
        }
    });

    useEffect(() => {
        updateFilteredCountry(data);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    const handleChange = (val) => {
        updateSearchText(val);
        let foundArray = [];
        if(val) {
            foundArray = data.filter((o) =>  o?.name?.toLowerCase().includes(val?.toLowerCase()) || o?.name?.toLowerCase().includes(val?.toLowerCase()));
        } else {
            foundArray = data
        }
        updateFilteredCountry(foundArray)
    };

    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity style={[Styles.listItem, index === 0 && Styles.lastListItem]} onPress={() => onSelect(item)}>
            <CText>{item.name}</CText>
            </TouchableOpacity>
        )
        // return <TouchableOpacity style={[Styles.listItem, index === 0 && Styles.lastListItem]} onPress={() => onSelect(item)}>
        //     {/* <View style={Styles.listItemIcon}>
        //         <ProgressiveImage
        //             source={{uri: item?.flags?.png}}
        //             resizeMode={'contain'}
        //             style={[Styles.listItemIconImage]}/>
        //     </View> */} 
        //     {/* <CText style={Styles.listItemText}> {item.name}</CText>
        //     <CText style={[Styles.listItemText, Styles.listItemLastText]}>
        //        {item?.detail?.code}
        //     </CText> */}
        //     <CText>{"ns"}</CText>
        // </TouchableOpacity> 

    };

    return (
        <View style={[GlobalStyle.fullContainer, {backgroundColor: 'transparent'}]}>
            <View style={GlobalStyle.listHeader}>
                <CInput
                    value={searchText}
                    onChangeText={val => handleChange( val)}
                    inputContainerStyle={GlobalStyle.searchInput}
                    inputInnerContainerStyle={GlobalStyle.searchInputInnerContainer}
                    style={[GlobalStyle.inputStyle, GlobalStyle.searchInputStyle]}
                    leftIconName={'search1'}
                    iconStyle={GlobalStyle.searchInputIcon}
                    onSubmitEditing={() => null}
                />
            </View>
            <CList
                loading={loading}
                contentContainerStyle={GlobalStyle.list}
                data={filteredCountry}
                renderItem={renderItem}
                maxToRenderPerBatch={10}
                windowSize={10}
                keyExtractor={(item, index) => index.toString()}
                emptyOptions={{
                    // icon: require('../../assets/images/country-not-found.png'),
                    text: "Country not found"
                }}
            />
        </View>
    )
}

export default React.memo(CountriesModal)
