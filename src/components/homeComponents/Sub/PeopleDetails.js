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


const PeopleDetails = props => {
  const [loading, setLoading] = useState(true);
  const [peopleDetails, setPeopleDetails] = useState();
  //const { PeopleId } = props.route.params;
  //const { movie } = props.route.params;
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  const mycolor = colors.iconColor
  const secondTextColor = colors.textColor2




  const { PeopleId } = props.route.params;



  useEffect(() => {
    const getPeopleDetails = async () => {
      const data = await getOnAirToday(`person/${props.route.params.PeopleId}`,);//props.route.params.
      //https://api.themoviedb.org/3/person/{person_id}
      setPeopleDetails(data);
      setLoading(false);
    };
    getPeopleDetails();
  }, []);



  const getAKA = () => {
    return peopleDetails.also_known_as.map(also_known_as => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        //borderColor: colors.text,
        //paddingHorizontal: 10,
        //paddingVertical: 5,
        margin:10,
        padding:5,
        //marginHorizontal: 10,
      }}>
        <Text style={{padding:10,color: colors.darkyellow, display: 'flex', flexDirection: 'row', fontSize: 16, }}>
          {also_known_as}
        </Text>
      </View>
    ));
  };






  return (
    <ScrollView style={{
      flex: 1,

      //height: Dimensions.height,
      backgroundColor: colors.backGround1
    }} >

      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{ uri: `${POSTER_IMAGE}${peopleDetails.profile_path}` }}
              style={{ width: Dimensions.width, height: 500, marginTop: 0 }}
            />
          </View>
          <View  style={{ padding: 10 }}>
            <Text style={{ color: secondTextColor, fontSize: 30, margin: 10 }}>
              {peopleDetails.name}
            </Text>
          </View>
          <View>
            <ScrollView horizontal>
              <View style={{ margin: 10, borderColor: colors.darkyellow }}>
                <Text style={{ color: colors.darkyellow }}>Birthday</Text>
                <Text style={{ color: colors.darkyellow }}>{peopleDetails.birthday}</Text>
              </View>

              <View style={{ margin: 10, }}>
                <Text style={{ color: colors.darkyellow }}>place of birth</Text>
                <Text style={{ color: colors.darkyellow }}>{peopleDetails.place_of_birth}</Text>
              </View>

              <View style={{ margin: 10, }}>
                <Text style={{ color: colors.darkyellow }}>known for</Text>
                <Text style={{ color: colors.darkyellow }}>{peopleDetails.known_for_department}</Text>
              </View>

              <View style={{ margin: 10, }}>
                <Text style={{ color: colors.darkyellow }}>Homepage</Text>
                <Text style={{ color: colors.darkyellow }}>{peopleDetails.homepage}</Text>
              </View>

              <View style={{ margin: 10, }}>
                <Text style={{ color: colors.darkyellow }}>Popularity</Text>
                <Text style={{ color: colors.darkyellow }}>{peopleDetails.popularity}</Text>
              </View>

              <View style={{ margin: 10, }}>
                <Text style={{ color: colors.darkyellow }}>Deathday</Text>
                <Text style={{ color: colors.darkyellow }}>{peopleDetails.deathday}</Text>
              </View>
            </ScrollView>
          </View>

          <View style={{ margin: 10, fontSize:15 }}>
            <Text style={{ color: colors.darkyellow }}>also known as</Text>
            <ScrollView horizontal>
              <View style={{ margin: 10, }}>
                <Text style={{ color: colors.darkyellow }}> {getAKA()}</Text>
              </View>
            </ScrollView>



            <View>
            <Text style={{ color: colors.darkyellow }}> Credits </Text>
              <Credits
               // title="credits"
                url={`person/${props.route.params.PeopleId}/combined_credits`}//person/{person_id}/combined_credits
              />
            </View>


            <View>
              <Text style={{ color: colors.darkyellow }}> Images</Text>
              <ImagesShow
                //title="Images"
                url={`person/${props.route.params.PeopleId}/images`}//person/{person_id}/images
              />
            </View>

            <View>
            <Text style={{ color: colors.darkyellow }}>Tagged Images</Text>
              <TaggedImageShow
               //title="Tagged Images"
               url={`person/${props.route.params.PeopleId}/tagged_images`}
               //person/{person_id}/tagged_images
              />
            </View>

          </View>

        </View>
      )}





    </ScrollView>
  );
}
export default PeopleDetails;