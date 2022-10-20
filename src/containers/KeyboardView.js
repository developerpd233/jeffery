import React from 'react';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

export const scrollPersistTaps = {
    keyboardShouldPersistTaps: 'always',
    keyboardDismissMode: 'interactive'
};

export default class KeyboardView extends React.PureComponent {

    render() {
        const {
            style, contentContainerStyle, scrollEnabled, keyboardVerticalOffset, children
        } = this.props;

        return (
            <KeyboardAwareScrollView
                {...scrollPersistTaps}
                style={style}
                contentContainerStyle={contentContainerStyle}
                scrollEnabled={scrollEnabled}
                alwaysBounceVertical={false}
                extraHeight={keyboardVerticalOffset}
                showsVerticalScrollIndicator={false}
                behavior='position'
            >
                {children}
            </KeyboardAwareScrollView>
        );
    }
}
