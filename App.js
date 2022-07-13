import React,{useState,useEffect} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/bottomTabs/HomeScreen';
import IgdbScreen from './src/screens/bottomTabs/IgdbScreen';
import VimeoScreen from './src/screens/bottomTabs/VimeoScreen';
import YoutubeScreen from './src/screens/bottomTabs/YoutubeScreen';
import DownLoadScreen from './src/screens/bottomTabs/DownLoadScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Provider, useSelector } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import { ThemeReducer } from './src/redux/ThemeReducer'
import GetOnAirMore from './src/components/homeComponents/Sub/GetOnAirMore';
import GetOnAirTodayMore from './src/components/homeComponents/Sub/GetOnAirTodayMore';
import GetPeopleMore from './src/components/homeComponents/Sub/GetPeopleMore';
import PeopleDetails from './src/components/homeComponents/Sub/PeopleDetails';
import SeriesDetail from './src/components/homeComponents/Sub/SeriesDetail';
import { useColorScheme, Button, View } from 'react-native';
import SearchTmdb from './src/components/homeComponents/Sub/SearchTmdb';
import SeasonTrailers from './src/components/homeComponents/Sub/SeasonTrailers';
import TopRatedMore from './src/components/homeComponents/Sub/TopRatedMore';
import PopularMore from './src/components/homeComponents/Sub/PopularMore';
import SplashScreen from 'react-native-splash-screen';



const Tabs = createBottomTabNavigator()

const RootHome = () => {
  const { colors } = useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.tabIcon,
        // tabBarActiveTintColor: 'tomato',
        //activeTintColor: colors.tabIcon,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        // tabBarBackground:colors.backGround1
      })}
    >


      <Tabs.Screen name="Home" component={HomeScreen}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="tv" color={color} size={26} />
          ),
        }}
      />


      <Tabs.Screen name="Youtube" component={YoutubeScreen}
        options={{
          //tabBarLabel: 'Youtube',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="youtube" color={color} size={26} />
          ),
        }}
      />

      <Tabs.Screen name="Vimeo" component={VimeoScreen}
        options={{
          //tabBarLabel: 'Vimeo',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="vimeo" color={color} size={26} />
          ),
        }}
      />


      <Tabs.Screen name="Igdb" component={IgdbScreen}
        options={{
          //tabBarLabel: 'Igdb',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="gamepad" color={color} size={26} />
          ),
        }}
      />

      <Tabs.Screen name="DownLoad" component={DownLoadScreen}
        options={{
          //tabBarLabel: 'DownLoad',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="download" color={color} size={26} />
          ),
        }}
      />

    </Tabs.Navigator>
  )
}




const Stack = createStackNavigator()

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red",
    textColor: '#fff',
    textColor2: 'red',
    backGround1: 'white',
    backGround2: '#121212',
    darkGray: '#969696',
    secondaryColor: '#F4C10F',
    darkyellow: '#F4c10f',
    black: '#040300',
    blue: '#00ACEE',
    twitterblue: '#1DA1F2',
    twitterBlack: '#14171A',
    twitterDarkGray: '#657786',
  }
}

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white",
    textColor: '#fff',
    textColor2: 'red',
    backGround1: '#151C26',//'#151C26',
    backGround2: '#121212',
    darkGray: '#969696',
    secondaryColor: '#F4C10F',
    darkyellow: '#F4c10f',
    black: '#040300',
    blue: '#00ACEE',
    twitterblue: '#1DA1F2',
    twitterBlack: '#14171A',
    twitterDarkGray: '#657786',
  }
}



const rootReducer = combineReducers({
  //cardData:reducer, //[],
  //customDarkTheme
  myDarMode: ThemeReducer//false
})
const store = createStore(rootReducer)




export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )

}




export function Navigation({ state, descriptors, navigation }) {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  let currentTheme = useSelector(state => {
    return state.myDarMode
  })



  return (
    <NavigationContainer theme={currentTheme ? customDarkTheme : customDefaultTheme}>

      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={({ route }) => ({ headerShown: false })} />
        <Stack.Screen  name="Igdb" component={IgdbScreen} options={({ route }) => ({ headerShown: false })} />
        <Stack.Screen name="Discover" component={RootHome} options={({ route }) => ({ headerShown: false })} />
        options={({ route }) => ({headerShown: false})}



        
        <Stack.Screen name="search" component={Search} /> 
        <Stack.Screen name="videoplayer" component={VideoPlayer} /> 
        <Stack.Screen name="Search" component={SearchTmdb} />
        <Stack.Screen name="On Air More" component={GetOnAirMore} />
        <Stack.Screen name="People More" component={GetPeopleMore} />
        <Stack.Screen name="Top Rated" component={TopRatedMore} />
        <Stack.Screen name="Popular More" component={PopularMore} />
        <Stack.Screen name="PeopleDetails" component={PeopleDetails} />
        <Stack.Screen name="SeriesDetail" component={SeriesDetail} />
        <Stack.Screen name="On Air Today More" component={GetOnAirTodayMore} />
        <Stack.Screen name="Season Trailers" component={SeasonTrailers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





















//import type {Node} from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
 

// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
   
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, [])
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

//export default App;
