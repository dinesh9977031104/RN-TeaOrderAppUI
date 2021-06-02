import React from 'react';
import {
    TouchableOpacity,
    Text
 } from 'react-native';

 import {COLORS} from '../constants';

 const CustomButton = ({containerStyle, lableStyle, lable, onPress, isPrimaryButton, isSecondaryButton}) => {
     return(
         <TouchableOpacity style={{
             alignItems:'center',
             justifyContent:'center',
             backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
             borderColor: isSecondaryButton ? COLORS.primary : COLORS.transparent,
             borderWidth: isSecondaryButton ? 1 : 0,
             ...containerStyle
         }}
         onPress={onPress}
         >

             <Text style={{
                 color: isPrimaryButton ? COLORS.white : COLORS.primary,
                 ...lableStyle
             }}>
                 {lable}
             </Text>

         </TouchableOpacity>
     )
 }

 export default CustomButton;