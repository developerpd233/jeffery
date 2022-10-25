import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import Style from './cDropDown.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const CDropDown = ({isOpened , setValue , value}) => {
  return (
    <View>
    <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    alwaysBounceVertical={false}
                                    contentContainerStyle={Style.scrollViewContainer}>
                                    <SelectDropdown
                                        data={[1,,2,3]}
                                        buttonStyle={Style.btn}
                                        buttonTextStyle={Style.btntxt}
                                        dropdownStyle={Style.dropdown}

                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'rgba(255,255,255,0.6)'} size={12} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        defaultButtonText={"-- Select Country --"}



                                        // defaultValueByIndex={1} // use default value by index or default value
                                        onSelect={(selectedItem, index) => {
                                            setValue(selectedItem)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item;
                                        }}
                                    />
                                </ScrollView>
    </View>
  )
}

export default CDropDown