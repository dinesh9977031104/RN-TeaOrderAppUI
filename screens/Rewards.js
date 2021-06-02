import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground
} from 'react-native';

import { HeaderBar, CustomButton } from '../components';

import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants';

import { connect } from 'react-redux';

const Rewards = ({ navigation, appTheme }) => {


    function renderRewardPointSection() {
        return (
            <View style={{
                alignItems: 'center',
                marginVertical: SIZES.padding
            }}>

                {/* text */}
                <Text style={{
                    color: COLORS.primary, ...FONTS.h1, fontSize: 30
                }}>Rewards</Text>

                <Text style={{
                    marginTop: 10,
                    color: appTheme.textColor,
                    width: SIZES.width * 0.6,
                    textAlign: 'center',
                    ...FONTS.h3,
                    lineHeight: 18
                }}>You are 60 points away from your next rewards</Text>

                {/* image */}

                <ImageBackground source={icons.reward_cup}
                    style={{
                        marginTop: SIZES.padding,
                        width: SIZES.width * 0.8,
                        height: SIZES.width * 0.8,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>

                    <View style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.white
                    }}>

                        <Text style={{
                            ...FONTS.h1
                        }}>280</Text>

                    </View>

                </ImageBackground>

            </View>
        )
    }

    function renderButtons(){
        return(
            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
            }}>

                {/* scan */}
                <CustomButton
                isPrimaryButton={true}
                lable='Scan in Store'
                containerStyle={{
                    width:130,
                    paddingVertical:5,
                    marginRight:SIZES.radius,
                    borderRadius:SIZES.radius * 2
                }}
                lableStyle={{
                    ...FONTS.h3
                }}
                onPress={() => navigation.navigate('Location')}
                />
                {/* redeem */}

                <CustomButton
                isSecondaryButton={true}
                lable='Redeem'
                containerStyle={{
                    width:130,
                    paddingVertical:5,
                    marginRight:SIZES.radius,
                    borderRadius:SIZES.radius * 2
                }}
                lableStyle={{
                    ...FONTS.h3
                }}
                onPress={() => navigation.navigate('Location')}
                />

            </View>
        )
    }

    function renderAvailableRewardsHeader(){
        return(
            <View style={{
                marginTop:SIZES.padding,
                marginBottom:SIZES.padding,
                paddingHorizontal:SIZES.padding
            }}>
                <Text style={{
                    color:appTheme.textColor, ...FONTS.h2
                }}>Available Rewards</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* header */}
            <HeaderBar />

            {/* details */}
            <FlatList
                style={{
                    marginTop: -25,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: appTheme.backgroundColor,
                }}
                data={dummyData.availableRewards}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* reward point */}

                        {renderRewardPointSection()}

                        {/* button */}

                        {renderButtons()}

                        {/* header lable */}

                        {renderAvailableRewardsHeader()}
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: SIZES.padding,
                            marginBottom: SIZES.base,
                            paddingVertical: SIZES.base,
                            borderRadius: 20,
                            backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
                        }}>
                            <Text style={{
                                color: item.eligible ? COLORS.black : COLORS.lightGray2, ...FONTS.body3
                            }}>{item.title}</Text>
                        </View>
                    )
                }}
                ListFooterComponent={
                    <View style={{marginBottom: 120}}/>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rewards)