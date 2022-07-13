import React, { useEffect, useState } from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { IMAGE_POSTER_URL } from '../../utils/Config';
import Constants from '../../utils/Constants';
import { View, Image, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import { POSTER_IMAGE } from '../../utils/Config';
import { getOnAirToday } from '../../services/tmdb/TmdbApi';


import { useTheme } from '@react-navigation/native';

const DiscoverCarrousel = props => {
  const [series, setSeries] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getOnAirToday(props.url);//"discover/tv"
      setSeries(data.results);

      const images = data.results.map(
        data => `https://image.tmdb.org/t/p/original/${data.poster_path}`,
      );

      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImages(data.results);
      //console.log(data.results)
    };

    getMovies();
  }, []);



  const displayDiscover = ({ item }, props) => {
    return (
      <TouchableOpacity     onPress={() => {props.navigation.push('SeriesDetail', { tvId: item.id });}}>
        <View style={{height:410, width:Dimensions.width}}>
          <Image
            source={{ uri: `${IMAGE_POSTER_URL}${item.poster_path}` }}
            //source={{ uri: "https://th.bing.com/th/id/R.2b45da6bd7e3ecc73758b235278e2164?rik=FC77H7OnQYo4dQ&pid=ImgRaw&r=0" }}
            style={{ height: 400, width: 300, margin: 10, borderRadius: 7 }} //person/{person_id}/images
          />
        </View>
      </TouchableOpacity>
    );
  };




  return (
    <View>
      {/* <View>
        <SliderBox
          images={images}
          Styles={{ margin: 5 }}
          dotColor={Constants.secondaryColor}
          onCurrentImagePressed={index => props.navigation.navigate('SeriesDetail', { tvId: tv[index].id })}
          autoplay
          circleLoop
        />
      </View>
      <View>
        <Text>{movies.name} hello</Text>
      </View> */}





      <FlatList
        key={'*'}
        keyExtractor={(item, index) => index + "_" + item.id.toString()}
        data={series}
        horizontal
        renderItem={item => displayDiscover(item, props)}
      />






    </View>
  );
};

export default DiscoverCarrousel;
