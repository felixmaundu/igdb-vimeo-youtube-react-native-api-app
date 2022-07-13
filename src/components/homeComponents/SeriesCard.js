import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { POSTER_IMAGE } from '../../utils/Config';
import { getOnAirToday } from '../../services/tmdb/TmdbApi';
import Styles from '../../utils/Styles';
import Loader from '../../utils/Loader';
import { useTheme } from '@react-navigation/native';


const SeriesCard = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { colors } = useTheme();

  useEffect(() => {
    const getMovies = async () => {
      const data = await getOnAirToday(props.url);
      setMovies(data.results);
      
      //setMovies((existingCoins) => [...existingCoins, ...results]);
      //setMovies([...movies, ...data.results]);
      setLoading(false);
      //console.log(data.results);
    };
    //console.log(data.results);
    getMovies();
  }, []);



  const displayMovies = ({ item }, props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('SeriesDetail', { tvId: item.id });
        }}
        style={{ marginHorizontal: 10 }}>
        <Image
          source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
          style={Styles.posterImage}
        />
        <Text style={{
          color: colors.text,
          width: 150,
          textAlign: 'center',
          marginTop: 5,
          fontSize: 16,
        }}      >{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>

          <FlatList
            key={'*'}
            //key={item.id}
            keyExtractor={(item, index) => index + "_" + item.id.toString()}
            data={movies}
            horizontal
            renderItem={item => displayMovies(item, props)}
          />
        </View>
      )}
    </View>
  );
};







export default SeriesCard;