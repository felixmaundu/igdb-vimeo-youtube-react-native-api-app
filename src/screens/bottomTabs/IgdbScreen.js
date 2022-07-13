import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import GameCard from '../../components/igdbComponents/GameCard';

const IgdbScreen = props => {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  //alignItems: 'center',
  const mycolor = colors.iconColor
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center',  backgroundColor: colors.backGround1 }}>
      <ScrollView>
      

        <View>
          
          <GameCard
            title="Igdb"
            url="games"
            navigation={props.navigation}
          />

          
        </View>


      </ScrollView>



    </SafeAreaView>
  );
}
export default IgdbScreen;