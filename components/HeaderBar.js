import React from 'react';

import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import { toggleTheme } from '../stores/themeActions';

import { SIZES, COLORS, FONTS, icons } from '../constants';

const HeaderBar = ({ appTheme, toggleTheme }) => {

    function toggleThemeHeandler(){
        if(appTheme.name == 'light'){
            toggleTheme('dark')
        }else{
            toggleTheme('light')
        }
    }
    return(
        <SafeAreaView style={{
            height:120,
            width:'100%',
            backgroundColor:COLORS.purple,
            flexDirection:'row',
        }}>

            {/* grittings */}

            <View style={{
                flex:1,
                paddingLeft:SIZES.padding,
                marginTop:16,
            }}>

                <Text style={{ color:COLORS.white, ...FONTS.h2}}>Dinesh,</Text>
                <Text style={{ color:COLORS.white, ...FONTS.h2}}>Welcome Back!</Text>
            </View>

            {/* toggle button */}

            <TouchableOpacity style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-end',
                marginHorizontal:SIZES.padding,
                height:40,
                borderRadius:20,
                backgroundColor:COLORS.lightPurple,
                marginTop:16
            }}
            onPress={() => toggleThemeHeandler()}
            >

                {/* sun */}
                <View style={{
                    height:40,
                    width:40,
                    justifyContent:'center',
                    alignItems:'center',
                    ...(appTheme.name == 'light') ? styles.selectedLightModStyle : {}
                }}>

                    <Image source={icons.sunny}
                    style={{
                        height:30,
                        width:30,
                        tintColor:COLORS.white
                    }}/>

                </View>
                {/* moon */}

                <View style={{
                    height:40,
                    width:40,
                    justifyContent:'center',
                    alignItems:'center',
                    ...(appTheme.name == 'dark') ? styles.selectedNightModStyle : {}
                }}>

                    <Image source={icons.night}
                    style={{
                        height:30,
                        width:30,
                        tintColor:COLORS.white
                    }}/>

                </View>

            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    selectedNightModStyle :{
        borderRadius:20,
        backgroundColor:COLORS.black
    },


    selectedLightModStyle :{
        borderRadius:20,
        backgroundColor:COLORS.yellow
    },
})

function mapStateToProps(state){
    return {
         appTheme : state.appTheme,
         error : state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme : (themeType) => { return dispatch(toggleTheme(themeType))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)