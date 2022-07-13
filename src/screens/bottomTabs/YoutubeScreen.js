import React from 'react';
import { Text, View, Dimensions, ScrollView ,TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import ListCard from '../../components/youtubeComponents/ListCard';
 
const YoutubeScreen = props => {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {
 
    return state.myDarMode
  })
  const mycolor = colors.iconColor
  return (
    <SafeAreaView style={{flex:1, backgroundColor: colors.backGround1, height: Dimensions.height }}>
      {/* <ScrollView  > */}
      

        <ListCard
         title="Videos"
         //url="search"
         navigation={props.navigation}
        />
      {/* </ScrollView> */}



    </SafeAreaView>
  );
}
export default YoutubeScreen;