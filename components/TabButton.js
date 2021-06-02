import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import {COLORS, FONTS } from '../constants';

const TabButton = ({ containerStyle, lable, selected, onPress }) => {

    return(
        <TouchableOpacity style={{
            alignItems:'center',
            ...containerStyle
        }}
        onPress={onPress}
        >

            {/* text */}
            <Text style={{
                color: selected ? COLORS.primary : COLORS.gray,
                ...FONTS.body2, fontSize: 16
            }}> 
            {lable}
            </Text>

            {/* line */}

            <View style={{
                marginTop: selected ? 3 : 4,
                height : selected ? 4 : 2,
                width : '100%',
                backgroundColor : selected ? COLORS.primary : COLORS.gray
            }}>

            </View>

        </TouchableOpacity>
    )
}

export default TabButton;