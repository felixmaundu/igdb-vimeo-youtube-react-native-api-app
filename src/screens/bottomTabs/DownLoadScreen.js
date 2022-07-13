import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'


const DownLoadScreen = props => {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  const mycolor = colors.iconColor
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.backGround1 }}>
      <ScrollView>
        

        <View>
        <Text >DownLoad !</Text>
        </View>
      </ScrollView>



    </SafeAreaView>
  );
}
export default DownLoadScreen;