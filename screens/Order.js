import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';

import Svg, { Circle } from 'react-native-svg';

import { dummyData, SIZES, COLORS, FONTS, icons } from '../constants';
import { IconButton, TabButton, VerticalTextButton } from '../components';

import { connect } from 'react-redux';

const Order = ({ navigation, route, appTheme }) => {

    const [selectedLocation, setSelectedLocation] = React.useState(null)

    const [selectedTab, setSelectedTab] = React.useState(0)

    const [selectedCategory, setSelectedCategory] = React.useState('Milk Tea')

    const [menu, setMenu] = React.useState(null)

    React.useEffect(() => {
        let { selectedLocation } = route.params
        setSelectedLocation(selectedLocation)
    }, [])

    React.useEffect(() => {

        let menuList = dummyData.menuList.filter(menuItem => menuItem.category == selectedCategory)

        setMenu(menuList)

    }, [selectedCategory])

    function renderHeaderSection() {
        return (
            <SafeAreaView style={{
                height: 150,
                backgroundColor: COLORS.primary,
                alignItems: 'center'
            }}>

                {/* nav bar */}
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    alignItems: 'center',
                    marginTop: 12
                }}>
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />

                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white, ...FONTS.h1, fontSize: 20
                        }}>Pick-Up Orders</Text>
                    </View>
                    <View style={{ width: 25 }} />
                </View>

                {/* location */}
                <View style={{
                    marginTop: SIZES.radius,
                    backgroundColor: COLORS.white1,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    borderRadius: SIZES.padding
                }}>

                    <Text style={{
                        color: COLORS.primary, ...FONTS.body3,
                    }}>{selectedLocation?.title}</Text>

                </View>

            </SafeAreaView>
        )
    }

    function renderTopTabBarSection() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                marginTop: SIZES.radius,
                justifyContent: 'center',
                paddingLeft: SIZES.radius * 2,
                paddingRight: SIZES.radius
            }}>

                {/* tab button */}
                <View style={{
                    flex: 1, flexDirection: 'row'
                }}>

                    <TabButton
                        containerStyle={{
                            width: 60
                        }}
                        lable='Menu'
                        selected={selectedTab == 0}
                        onPress={() => setSelectedTab(0)}
                    />


                    <TabButton
                        containerStyle={{
                            width: 90
                        }}
                        lable='Previous'
                        selected={selectedTab == 1}
                        onPress={() => setSelectedTab(1)}
                    />


                    <TabButton
                        containerStyle={{
                            width: 90
                        }}
                        lable='Favourite'
                        selected={selectedTab == 2}
                        onPress={() => setSelectedTab(2)}
                    />

                </View>
                {/* order number */}

                <View style={{
                    height: 35,
                    width: 35,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primary
                }}>
                    <Text style={{
                        color: COLORS.white, ...FONTS.h3
                    }}>0</Text>

                </View>

            </View>
        )
    }

    function renderSideBar() {
        return (
            <View>
                <Svg height='65' width='65' viewBox='0 0 65 65'>
                    <Circle
                        cx='5'
                        cy='60'
                        r='60'
                        fill={COLORS.primary}
                    />
                </Svg>
                <View style={{
                    marginTop: -10,
                    width: 65,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
                }}>

                    <VerticalTextButton
                        lable='Snack'
                        selected={selectedCategory == 'Snack'}
                        onPress={() => setSelectedCategory('Snack')}
                    />

                    <VerticalTextButton
                        lable='Coffee'
                        containerStyle={{
                            marginTop: 50
                        }}
                        selected={selectedCategory == 'Coffee'}
                        onPress={() => setSelectedCategory('Coffee')}
                    />

                    {/* <VerticalTextButton
                        lable='Smoothie'
                        containerStyle={{
                            marginTop: 70,
                            width: 100
                        }}
                        selected={selectedCategory == 'Smoothie'}
                        onPress={() => setSelectedCategory('Smoothie')}
                        /> */}

                    <VerticalTextButton
                        lable='Specialtea'
                        containerStyle={{
                            marginTop: 70,
                            width: 100
                        }}
                        selected={selectedCategory == 'Specialtea'}
                        onPress={() => setSelectedCategory('Specialtea')}
                    />

                    <VerticalTextButton
                        lable='Milk Tea'
                        containerStyle={{
                            marginTop: 80,
                            width: 80
                        }}
                        selected={selectedCategory == 'Milk Tea'}
                        onPress={() => setSelectedCategory('Milk Tea')}
                    />

                </View>
                <Svg height='65' width='65' viewBox='0 0 65 65'>
                    <Circle
                        cx='5'
                        cy='0'
                        r='60'
                        fill={COLORS.primary}
                    />
                </Svg>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {/* header */}
            {renderHeaderSection()}

            {/* details */}
            <View style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor,
                marginTop: -40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}>
                {/* tab bar */}
                {renderTopTabBarSection()}

                {/* side bar & listing */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>

                    {/* side bar */}

                    {renderSideBar()}

                    {/* listing */}

                    <FlatList
                    contentContainerStyle={{
                        marginTop:SIZES.padding,
                        paddingBottom:50
                    }}
                    data={menu}
                    keyExtractor={item => item.id}
                   renderItem={({item, index}) => {
                       return(
                           <TouchableWithoutFeedback 
                           onPress={() => navigation.navigate('OrderDetail', {selectedItem : item })}
                           >
                               <View style={{
                                   height:110,
                                   paddingHorizontal:SIZES.padding,
                                   marginTop: index > 0 ? SIZES.padding : 0,
                                   alignItems:'flex-end',
                                   justifyContent:'flex-end'
                               }}>

                                   {/* thumbnail */}

                                   <View style={{
                                       position:'absolute',
                                       top:0,
                                       left:SIZES.padding,
                                       width:100,
                                       height:110,
                                       alignItems:'center',
                                       justifyContent:'center',
                                       borderRadius:SIZES.radius,
                                       backgroundColor:COLORS.lightYellow,
                                       zIndex:1
                                   }}>

                                       <Image 
                                       source={item.thumbnail}
                                       resizeMode='contain'
                                       style={{
                                           height:70,
                                           width:70
                                       }}
                                       />

                                   </View>

                                   {/* details */}

                                   <View style={{
                                       width:'100%',
                                       height:'100%',
                                       paddingLeft:'45%',
                                       paddingRight:SIZES.base,
                                       paddingVertical:SIZES.base,
                                       borderRadius:SIZES.radius,
                                       justifyContent:'space-between',
                                       backgroundColor:COLORS.primary
                                   }}>

                                       <Text style={{
                                           color:COLORS.white,
                                           ...FONTS.h2,
                                           fontSize:16,
                                           lineHeight:25
                                       }}>
                                           {item.name}
                                       </Text>

                                       <Text style={{
                                           color:COLORS.lightYellow,
                                           ...FONTS.h2,
                                           fontSize: 14
                                       }}>
                                           {item.price}
                                       </Text>

                                   </View>

                               </View>

                           </TouchableWithoutFeedback>
                       )
                   }}
                    />

                </View>

            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order)