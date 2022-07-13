import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { POSTER_IMAGE, IMAGE_POSTER_URL } from '../../../utils/Config';
import { getOnAirToday } from '../../../services/tmdb/TmdbApi';
import Styles from '../../../utils/Styles';
import Loader from '../../../utils/Loader';

const Credits = props => {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  const mycolor = colors.iconColor

  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState();


  useEffect(() => {
    const getImages = async () => {
      const data = await getOnAirToday(props.url);
      setCredits(data.cast);
      setLoading(false);
      //console.log(data.cast);
    };

    getImages();
  }, []);







  const displayCredits = ({ item }, props) => {
    return (
      <TouchableOpacity>
        <View>
          <View>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${item.poster_path}` }}
              //source={{ uri: "https://th.bing.com/th/id/R.2b45da6bd7e3ecc73758b235278e2164?rik=FC77H7OnQYo4dQ&pid=ImgRaw&r=0" }}
              style={{ width: 250, height: 400, margin: 10, borderRadius: 7 }} //person/{person_id}/images
            />
          </View>

          <View style={{ width: 250,  margin: 10, }}>
            <Text style={{ color: colors.darkyellow }}>Name: {item.name}</Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={{ color: colors.darkyellow }}>Media type:  {item.media_type}</Text>
            {/* <Text style={{ color: 'white', fontSize: 10 }}>  {movie.overview.length < 100 ? movie.overview: movie.overview.substr(0, 100) + '...'}</Text> */}
            <Text style={{
              color: colors.text,
              fontSize: 25
            }}>overview</Text>
            <Text style={{ color: colors.darkyellow }}>Media type  {item.overview}</Text>


          </View>
        </View>





      </TouchableOpacity>
    );
  };






  return (

    <ScrollView style={{ backgroundColor: colors.backGround1 }}>

      {loading ? (
        <Loader />
      ) : (
        <View >

          <FlatList
            key={'*'}
            keyExtractor={(item, index) => index + "_" + item.id.toString()}
            data={credits}
            horizontal
            renderItem={item => displayCredits(item, props)}
          />
        </View>
      )}



    </ScrollView>




  );
}
export default Credits;