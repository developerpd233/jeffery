import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { ProgressiveImage, CText } from "../../uiComponents";
import Styles from "./CListStyle";
import Icon from "../../assets/icons/CustomIcon";

function CListItem(props) {
    const {
        price,
        activeOpacity = 0.8,
        onPress,
        title,
        image,
        imageResizeMode = "cover",
        type,
        listItemStyle,
        listItemView,
        rightIconName,
        subTitle,
        imageStyle,
        priceStyle,
        buttonFunc,
        buttonIcon,
        buttonText,
        titleStyles,
        subTitleStyles
    } = props;
    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={[
                Styles.listItem,
                type === "horizontal" && Styles.horizontalItem,
                listItemStyle,
            ]}
            onPress={onPress}
        >
            <View
                style={[
                    Styles.listItemView,
                    type === "horizontal" && Styles.horizontalItemView,
                    listItemView,
                ]}
            >
               {image ? <View
                    style={[
                        Styles.listItemImageContainer,
                        type === "horizontal" &&
                            Styles.horizontalItemImageContainer,
                        imageStyle,
                    ]}
                >
                    <ProgressiveImage
                        source={image}
                        resizeMode={imageResizeMode}
                        style={Styles.listItemImage}
                    />
                </View> : null}
                <View
                    style={[
                        Styles.listItemContent,
                        type === "horizontal" && Styles.horizontalItemContent,
                    ]}
                >
                    {subTitle ? (
                        <CText
                            style={[Styles.listItemOrderNumber , subTitleStyles]}
                            numberOfLines={1}
                        >
                            {subTitle}
                        </CText>
                    ) : null}
                    <CText style={[Styles.listItemTitle , titleStyles]} >
                        {title}
                    </CText>
                    {price ? (
                        <CText
                            style={[Styles.listItemSubTitle, priceStyle]}
                            numberOfLines={1}
                        >
                            {price}
                        </CText>
                    ) : null}

                    {buttonText ? (
                        <TouchableOpacity
                            style={Styles.listItemButton}
                            onPress={buttonFunc && buttonFunc}
                        >
                            {buttonIcon ? (
                                <Icon
                                    name={buttonIcon}
                                    style={Styles.listItemButtonIcon}
                                />
                            ) : null}
                            <CText style={Styles.listItemButtonText}>
                                {buttonText}
                            </CText>
                        </TouchableOpacity>
                    ) : null}
                </View>
                {rightIconName ? (
                    <Icon
                        style={Styles.listItemRightIcon}
                        name={rightIconName}
                    />
                ) : null}
            </View>
        </TouchableOpacity>
    );
}

export default CListItem;
