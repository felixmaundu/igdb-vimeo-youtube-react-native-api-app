import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Header = props => {

    const dispatch = useDispatch()
    const { colors } = useTheme()
    const currentTheme = useSelector(state => {

        return state.myDarMode
    })
    const mycolor = colors.iconColor


    // const cardData = useSelector(state=>{
    //   return state.cardData
    // })


    return (
        <View style={{
            // marginTop:Constant.statusBarHeight,
            //position: "absolute",
            // top: 0,
            // left: 0,
            //right: 0,
            width: Dimensions.width,
            height: 120,
            backgroundColor: colors.backGround1,
            // flexDirection: "row",
            // justifyContent: "space-between",
            elevation: 4,
        }}>

            <SafeAreaView style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <View>
                    <Text style={{ color: mycolor, fontSize: 50 }}>
                        Discover
                    </Text>
                </View>

                <TouchableOpacity>
                    <Text style={{ color: colors.text, fontSize: 18, padding: 20 }}
                       >
                        {/* <Text style={{ color: mycolor, }} //flex: 1 onPress={() => dispatch({ type: "change_theme", payload: !currentTheme})}> another trial</Text> */}
                        <Icon
                            name="search"
                            size={30}
                            onPress={() => {
                                props.navigation.push('Search');
                            }}
                        /></Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity>
                        <Text style={{ color: colors.text, fontSize: 18, marginEnd: 20 }}
                        >
                            <FontAwesomeIcon
                                name="moon"
                                size={30}
                                style={{ color: mycolor, }} //flex: 1
                                onPress={() => dispatch({
                                    type: "change_theme",
                                    payload: !currentTheme
                                })}
                            /></Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>



        </View>
    );
}
export default Header;