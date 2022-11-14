import React, { Fragment } from "react";
import {
    View,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icons from "../../assets/icons/CustomIcon";
import GlobalStyle from "../../assets/stylings/GlobalStyle";
import { themes } from "../../theme/colors";
import ProgressiveImage from "../progressiveImage/ProgressiveImage";
import MaskInput from "react-native-mask-input";
import CText from "../cText/CText";

TextInput.defaultProps = {
    ...(TextInput.defaultProps || {}),
    allowFontScaling: false,
};

const CInput = React.forwardRef((props, ref) => {
    const {
        inputContainerStyle,
        inputInnerContainerStyle,
        inputLabel,
        inputLabelStyle,
        inputSubLabel,
        inputSubLabelStyle,
        type,
        onPress,
        selectedCountry,
        textStyle,
        disabled,
        leftIconName,
        toggleLeftIconFunc,
        leftIconButtonStyle,
        iconStyle,
        inputErrorStyle,
        error,
        toggleRightIconFunc,
        rightIconButtonStyle,
        onRightPress,
        rightIconName ,
        rightButton,
        style,
        value,
        countryView,
        countryViewLoading = false,
        multiline=false,
        placeholder,
        secureTextEntry = false,
        lableandSubLabelStyle,
        onChangeText,
        placeholderTextColor=themes["light"].colors.white5   
    } = props;

    const renderLabel = () => {
        return (
            <CText style={{ ...GlobalStyle.inputLabel, ...inputLabelStyle }}>
                {inputLabel}
            </CText>
        );
    };
    const renderSubLabel = () => {
        return (
            <CText
                style={{ ...GlobalStyle.inputSubLabel, ...inputSubLabelStyle }}
            >
                {inputSubLabel}
            </CText>
        );
    };

    const renderLeftIcon = () => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={toggleLeftIconFunc}
                style={{
                    ...GlobalStyle.inputLeftIconButton,
                    ...leftIconButtonStyle,
                }}
            >
                <AntDesign
                    name={leftIconName}
                    style={{ ...GlobalStyle.inputIcon, ...iconStyle }}
                />
            </TouchableOpacity>
        );
    };

    const renderRightIcon = () => {
        return (
            <TouchableOpacity
            style={{
                ...GlobalStyle.inputRightIconButton,
                ...rightIconButtonStyle,
            }}
                disabled={disabled}
                onPress={onRightPress}
            >       
                    <Fragment>       
                        <AntDesign
                            name={rightIconName}
                            style={GlobalStyle.countryViewDropDownIcon}
                        />
                    </Fragment>
            </TouchableOpacity>
        );
    };

    const renderErrorView = () => {
        return (
            <CText
                style={{ ...GlobalStyle.errorTextStyle, ...inputErrorStyle }}
            >
                {error}
            </CText>
        );
    };

    const renderInputView = () => {
        return (
            <MaskInput
                ref={ref}
                maskChar="x"
                multiline={multiline}
                autoCorrect={false}
                numberOfLines={10}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                dfv={themes["light"].colors.white5}
                style={[ value ? {  ...GlobalStyle.inputStyle, ...style }:{...GlobalStyle.placeholderStyle,}]}
                autoCapitalize="none"
                value={value}
                onChangeText={onChangeText}
                {...props}
            />
        );
    };

    const renderSelectionView = () => {
        return (
            <TouchableOpacity
                style={[
                    { ...GlobalStyle.inputStyle, ...style },
                    { justifyContent: "center" },
                ]}
                onPress={onPress}
            >
                <CText
                    style={[
                        { ...GlobalStyle.inputTextStyle, ...textStyle },
                        !value && { color: themes["light"].colors.white5 },
                    ]}
                >
                    {value ? value : placeholder}
                </CText>
            </TouchableOpacity>
        );
    };

    const renderCountryView = () => {
        return (
            <TouchableOpacity
                style={{
                    ...GlobalStyle.countryView,
                    ...countryView,
                    ...(error && GlobalStyle.errorBorder),
                }}
                disabled={disabled}
                onPress={onPress}
            >
                {countryViewLoading ? (
                    <ActivityIndicator color="#000080" size={24} />
                ) : (
                    <Fragment>
                        <ProgressiveImage
                            resizeMode={"contain"}
                            style={GlobalStyle.countryViewImage}
                            source={{ uri: selectedCountry?.flag_image }}
                        />
                        <CText style={GlobalStyle.countryViewText}>
                            {selectedCountry?.name}
                        </CText>
                        {/* <AntDesign
                            name="caretdown"
                            style={GlobalStyle.countryViewDropDownIcon}
                        /> */}
                    </Fragment>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ ...GlobalStyle.inputContainer, ...inputContainerStyle }}>
            <View style={[lableandSubLabelStyle]}>

            {inputLabel ? renderLabel() : null}
            {inputSubLabel ? renderSubLabel() : null}
            </View>
            <View
                style={{
                    ...GlobalStyle.inputInnerContainer, 
                    ...inputInnerContainerStyle,
                    ...(error && GlobalStyle.errorBorder),
                }}
            >
                {leftIconName ? renderLeftIcon() : null}
                {type === "view"  ? renderSelectionView() : selectedCountry && Object.keys(selectedCountry).length
                    ? renderCountryView() : renderInputView()}
                {/* {selectedCountry && Object.keys(selectedCountry).length
                    ? renderCountryView()
                    : null} */}
                {rightIconName ? renderRightIcon() : null}
                {rightButton ? rightButton() : null}
            </View>
            {error ? renderErrorView() : null}
        </View>
    );
});

CInput.defaultProps = {
    inputContainerStyle: {},
    inputLabelStyle: {},
    iconButtonStyle: {},
    inputInnerContainerStyle: {},
    iconStyle: {},
    inputErrorStyle: {},
    toggleIconFunc: () => null,

    toggleRightIconFunc: () => null,
    rightButton: () => null,
    rightIconButtonStyle: {},

    toggleLeftIconFunc: () => null,
    leftIconButtonStyle: {},
    leftIconName: "",

    inputLabel: "",
    error: "",
};

export default React.memo(CInput);
