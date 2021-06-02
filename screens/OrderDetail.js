import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { dummyData, FONTS, COLORS, SIZES, icons } from '../constants';
import { IconButton } from '../components';

import { connect } from 'react-redux';

const OrderDetail = ({ navigation, route, appTheme }) => {

    const [selectedItem, setSelectedItem] = React.useState(null)

    const [selectedSize, setSelectedSize] = React.useState(50)

    const [selectedMilkIndex, setSelectedMilkIndex] = React.useState(0)

    const [selectedSweetnesLavel, setSelectedSweetnesLavel] = React.useState(50)

    const [selectedIceLavel, setSelectedIceLavel] = React.useState(50)

    React.useEffect(() => {
        let { selectedItem } = route.params
        setSelectedItem(selectedItem)
    }, [])

    function milkButtonHeandler(action) {
        if (action == 'next' && selectedMilkIndex < dummyData.milkList.length - 1) {
            setSelectedMilkIndex(selectedMilkIndex + 1)
        } else if (action == 'prev' && selectedMilkIndex > 0) {
            setSelectedMilkIndex(selectedMilkIndex - 1)
        }
    }


    function sweetnessLavelButtonHeandler(action) {
        if (action == '+' && selectedSweetnesLavel < 100) {
            setSelectedSweetnesLavel(selectedSweetnesLavel + 25)
        } else if (action == '-' && selectedSweetnesLavel > 0) {
            setSelectedSweetnesLavel(selectedSweetnesLavel - 25)
        }
    }


    function iceLavelButtonHeandler(action) {
        if (action == '+' && selectedIceLavel < 100) {
            setSelectedIceLavel(selectedIceLavel + 25)
        } else if (action == '-' && selectedIceLavel > 0) {
            setSelectedIceLavel(selectedIceLavel - 25)
        }
    }

    function renderHeaderSection() {
        return (
            <View style={{
                width: '100%',
                height: '55%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 40,
                    borderBottomLeftRadius: 100,
                    backgroundColor: COLORS.primary
                }} />

                <Image
                    source={selectedItem?.thumbnail}
                    resizeMode='contain'
                    style={{
                        // width: SIZES.width * 0.7,
                        // height: SIZES.width * 0.7,
                        width: 150,
                        height: 150,
                    }}
                />

                {/* back button */}
                <IconButton
                    containerStyle={{
                        position: 'absolute',
                        top: 45,
                        left: 20,
                        padding: 10,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.black
                    }}
                    icon={icons.leftArrow}
                    onPress={() => navigation.goBack()}
                />

            </View>
        )
    }

    function renderDetailSection() {
        return (
            <View style={{
                flex: 1,
                paddingHorizontal: 30,
                marginTop: SIZES.padding,
                justifyContent: 'space-between'
            }}>

                {/* name and desc */}
                <View>
                    <Text style={{
                        color: appTheme.headerColor,
                        ...FONTS.h1,
                        fontSize: 20,
                    }}>
                        {selectedItem?.name}
                    </Text>

                    <Text style={{
                        marginTop: SIZES.base,
                        color: appTheme.textColor,
                        ...FONTS.body3
                    }}>
                        {selectedItem?.description}
                    </Text>
                </View>

                {/* size */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.radius
                }}>

                    {/* lable */}
                    <Text style={{
                        flex: 1,
                        color: appTheme.headerColor,
                        ...FONTS.h2,
                        fontSize: 16
                    }}>
                        Pick a Size
                    </Text>
                    {/* cup */}

                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                            onPress={() => setSelectedSize(20)}
                        >

                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 20 ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{
                                    color: COLORS.white, ...FONTS.body3
                                }}>
                                    20ml
                                </Text>
                            </ImageBackground>

                            <Text style={{
                                marginTop: 3, color: COLORS.white, ...FONTS.body3
                            }}>
                                $2.50
                                </Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                            onPress={() => setSelectedSize(50)}
                        >

                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 100,
                                    height: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 50 ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{
                                    color: COLORS.white, ...FONTS.body3
                                }}>
                                    50ml
                                </Text>
                            </ImageBackground>

                            <Text style={{
                                marginTop: 3, color: COLORS.white, ...FONTS.body3
                            }}>
                                $5.00
                                </Text>

                        </TouchableOpacity>

                    </View>

                </View>

                {/* Milk sweetness and ice */}

                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding
                }}>

                    {/* milk */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: appTheme.headerColor,
                            ...FONTS.h2,
                            fontSize: 16
                        }}>
                            Milk
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            width: 100,
                            height: 100,
                            marginTop: SIZES.base,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}>

                            <IconButton
                                icon={icons.leftArrow}
                                containerStyle={{
                                    marginLeft: -15,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.white
                                }}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.black
                                }}
                                onPress={() => milkButtonHeandler('prev')}
                            />

                            <Image
                                source={dummyData.milkList[selectedMilkIndex].image}
                                resizeMode='contain'
                                style={{
                                    flex: 1,
                                    width: 70,
                                    height: 70,
                                    tintColor: COLORS.white
                                }}
                            />

                            <IconButton
                                icon={icons.rightArrow}
                                containerStyle={{
                                    marginRight: -15,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.white
                                }}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.black
                                }}
                                onPress={() => milkButtonHeandler('next')}
                            />
                        </View>

                        <Text style={{
                            marginTop: SIZES.base,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}>
                            {dummyData.milkList[selectedMilkIndex].name}
                        </Text>

                    </View>

                    {/* sweet & ice */}

                    <View style={{
                        flex: 1
                    }}>

                        {/* sweetness */}
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                color: appTheme.headerColor,
                                ...FONTS.h2,
                                fontSize: 16
                            }}>
                                Sweetness
                            </Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '60%',
                                borderRadius: 15,
                                backgroundColor: COLORS.primary
                            }}>

                                <IconButton
                                    icon={icons.leftArrow}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => sweetnessLavelButtonHeandler('-')}
                                />

                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                    <Text style={{
                                        color: COLORS.white, ...FONTS.h3
                                    }}>
                                        {selectedSweetnesLavel} %
                                    </Text>

                                </View>

                                <IconButton
                                    icon={icons.rightArrow}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => sweetnessLavelButtonHeandler('+')}
                                />

                            </View>

                        </View>

                        {/* ice */}

                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                color: appTheme.headerColor,
                                ...FONTS.h2,
                                fontSize: 16
                            }}>
                                Ice
                            </Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '60%',
                                borderRadius: 15,
                                backgroundColor: COLORS.primary
                            }}>

                                <IconButton
                                    icon={icons.leftArrow}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => iceLavelButtonHeandler('-')}
                                />

                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                    <Text style={{
                                        color: COLORS.white, ...FONTS.h3
                                    }}>
                                        {selectedIceLavel} %
                                    </Text>

                                </View>

                                <IconButton
                                    icon={icons.rightArrow}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => iceLavelButtonHeandler('+')}
                                />

                            </View>

                        </View>

                    </View>

                </View>

            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: appTheme.backgroundColor
        }}>

            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    paddingBottom: 270
                }}>

                {/* header */}

                {renderHeaderSection()}

                {/* details */}

                {renderDetailSection()}

            </ScrollView>
        </View>
    )
}




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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)