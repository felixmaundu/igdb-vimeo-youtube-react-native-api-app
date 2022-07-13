import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getOnAirToday } from '../../../services/tmdb/TmdbApi';
import Loader from '../../../utils/Loader';
import { POSTER_IMAGE } from '../../../utils/Config';
import Credits from './Credits';
import ImagesShow from './ImagesShow';
import TaggedImageShow from './TaggedImageShow';
import VideoSeasonTrailers from './VideoSeasonTrailers';


const SeasonTrailers = props => {
  const [loading, setLoading] = useState(true);
  const [seasonTrailers, setSeasonTrailers] = useState();

  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  const mycolor = colors.iconColor
  const secondTextColor = colors.textColor2




  const { SeasonTrailerId } = props.route.params;



  useEffect(() => {
    const getPeopleDetails = async () => {
      const data = await getOnAirToday(//${props.route.params.SeasonTrailerId.season_number}
        `tv/${props.route.params.SeasonTrailerId}/season/1`,
        );//props.route.params.

      setSeasonTrailers(data);
      setLoading(false);
      console.log("data", data)
    };
    getPeopleDetails();
  }, []);










  return (
    <ScrollView style={{
      flex: 1,

      //height: Dimensions.height,
      backgroundColor: colors.backGround1
    }} >

      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
           <View style={{   alignItems: 'center',}}>
            <Text style={{
                //width: 300,
                fontSize: 20,
                textAlign: 'center',
                marginTop: 10,
                color: colors.text,
            }}>
                Trailers
            </Text>
            </View>
          <View>
          <Text style={{fontSize:17, color: colors.text,
            }}> Air Date: {seasonTrailers.air_date}</Text>
          
          </View>
          

          <View>
            <VideoSeasonTrailers
              title="SEASON TRAILERs"
              url={`tv/${props.route.params.SeasonTrailerId}/videos`}

            />
          </View>


        </ScrollView>
      )}





    </ScrollView>
  );
}
export default SeasonTrailers;