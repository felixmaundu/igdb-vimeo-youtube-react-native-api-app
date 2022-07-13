import React,{useEffect,useState} from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homeComponents/Header';
import SeriesCard from '../../components/homeComponents/SeriesCard';
import People from '../../components/homeComponents/People';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import CarouselCards from '../../components/homeComponents/test/CarouselCards';
import DiscoverCarrousel from '../../components/homeComponents/DiscoverCarrousel';
import { BannerView, NativeAdsManager } from 'react-native-fbads'
import { InterstitialAdManager } from 'react-native-fbads';

const HomeScreen = props => {

  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  // const bannerAdPlacementId = '613127422715714_613130569382066'
  // const interstitialAdPlacementId = '613127422715714_782318295796625'
  const mycolor = colors.iconColor
  const secondTextColor = colors.textColor2

  // useEffect(() => {
  //   InterstitialAdManager.showAd(interstitialAdPlacementId)
  //   .then((didClick) => {})
  //   .catch((error) => {});
  // }, [])


  // const cardData = useSelector(state=>{
  //   return state.cardData
  // })


  return (
    <SafeAreaView style={{
      flex: 1,
      //justifyContent: 'center', alignItems: 'center',
      height: Dimensions.height,
      backgroundColor: colors.backGround1
    }}>


      <View style={{ height: 60, width: Dimensions.width }}>
        <Header
          //title="Header"
          navigation={props.navigation}
        />
      </View>


      {/* <StatusBar style="auto" /> */}

      <ScrollView style={{ paddingBottom: 60, backgroundColor: colors.backGround1 }}>
        <View style={{ paddingBottom: 60 }}>

          <View>
            {/* <Text style={{ color: secondTextColor, fontSize: 20 }}>hello</Text> */}
            {/* <CarouselCards /> */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center', }}>
              <Text style={{ color: secondTextColor, fontSize: 20 }}>Discover</Text>

              <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', }}>

              </View>

            </View>


            <DiscoverCarrousel
              title="discover Tv"
              url="discover/tv"
              navigation={props.navigation}
            />
          </View>

          <View>
            {/* <NativeAdsManager
              placementId={bannerAdPlacementId}
              type='standard'
              onPress={() => console.log('press add')}
              onError={err => console.log(err)}
              onLoad={() => console.log('Loaded')}
            /> */}
            {/* <BannerView
              placementId={bannerAdPlacementId}
              type='standard'
              onPress={() => console.log('press add')}
              onError={err => console.log(err)}
              onLoad={() => console.log('Loaded')}
            /> */}
          </View>


          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center', }}>
              <Text style={{ color: secondTextColor, fontSize: 20 }}> On Air Today</Text>

              <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', }}>
                <Text style={{ color: secondTextColor, fontSize: 15, margin: 10 }}> See more</Text>
                <FontAwesomeIcon name="arrow-right" style={{ color: secondTextColor }} size={26}
                  onPress={() => { props.navigation.push('On Air Today More'); }} />
              </View>

            </View>
            <SeriesCard
              title="On Air Today"
              url="tv/airing_today"
              navigation={props.navigation}
            />
          </View>


          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center', }}>
              <Text style={{ color: secondTextColor, fontSize: 20 }}> On Air </Text>

              <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', }}>
                <Text style={{ color: secondTextColor, fontSize: 15, margin: 10 }}> See more</Text>
                <FontAwesomeIcon name="arrow-right" style={{ color: secondTextColor }} size={26}
                  onPress={() => { props.navigation.push('On Air More'); }} />
              </View>

            </View>
            <SeriesCard
              title="On Air "
              url="tv/on_the_air"
              navigation={props.navigation}
            />
          </View>


          <View >
            <View style={{ marginTop: 2, flexDirection: 'row', justifyContent: 'space-between', margin: 1, alignItems: 'center', }}>
              <Text style={{ color: secondTextColor, fontSize: 20 }}>person popular</Text>

              <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', }}>
                <Text style={{ color: secondTextColor, fontSize: 15, margin: 10 }}> See more</Text>
                <FontAwesomeIcon name="arrow-right" style={{ color: secondTextColor }} size={26}
                  onPress={() => { props.navigation.push('People More'); }} />
              </View>

            </View>
            <People
              //title="Popular Cast"
              url="person/popular"
              navigation={props.navigation}
            />
          </View>


          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center', }}>
              <Text style={{ color: secondTextColor, fontSize: 20 }}>popular</Text>

              <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', }}>
                <Text style={{ color: secondTextColor, fontSize: 15, margin: 10 }}> See more</Text>
                <FontAwesomeIcon name="arrow-right" style={{ color: secondTextColor }} size={26}
                  onPress={() => { props.navigation.push('Popular More'); }}
                />
              </View>

            </View>
            <SeriesCard
              title="popular "
              url="tv/popular"
              navigation={props.navigation}
            />
          </View>


          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center', }}>
              <Text style={{ color: secondTextColor, fontSize: 20 }}> top_rated</Text>

              <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center', }}>
                <Text style={{ color: secondTextColor, fontSize: 15, margin: 10 }}> See more</Text>
                <FontAwesomeIcon name="arrow-right" style={{ color: secondTextColor }} size={26}
                  onPress={() => { props.navigation.push('Top Rated'); }}
                />
              </View>

            </View>
            <SeriesCard
              title="top rated "
              url="tv/top_rated"
              navigation={props.navigation}
            />
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}
export default HomeScreen;