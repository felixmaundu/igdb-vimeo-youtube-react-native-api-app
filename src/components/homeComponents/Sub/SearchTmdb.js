import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image ,FlatList,Text, View, Dimensions, ScrollView, TextInput, StyleSheet,ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from '../../../utils/Loader';
import Axios from 'axios';
import { IMAGE_POSTER_URL } from '../../../utils/Config';

const SearchTmdb = props => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  const mycolor = colors.iconColor

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=53939b3da3d575c42c212fb77c52c5a5&page=${currentPage}`;
    Axios.get(url).then(response => {
      const movies = response.data.results;
      setMovies([...movies, ...response.data.results]);

      setMovies(movies);
      setIsLoading(false);
    });
  }, []);


  const searchSeries = text => {
    let url = `https://api.themoviedb.org/3/search/tv?query=${text}&api_key=53939b3da3d575c42c212fb77c52c5a5&page=${currentPage}&language=en-US&include_adult=false`;

    Axios.get(url).then(response => {
      let movies = response.data.results;

      setMovies(movies);
      setIsLoading(false);

    });
  };



  const loadMoreItem = () => {setCurrentPage(currentPage + 1);};

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="red" />
        </View> : null
    );
  };



  return (
    <SafeAreaView style={{
      flex: 1,
     
      height: Dimensions.height,
      backgroundColor: colors.backGround1
    }}>
      <View>
        <TextInput
          placeholder="  series,  top rated, discover"
          placeholderTextColor={{ color: colors.text }}
          onChangeText={text => searchSeries(text)}
          style={{
            borderColor: colors.text,
            backgroundColor: colors.twitterDarkGray,
            margin: 7,
            borderRadius: 10,
            color: colors.text
          }}
        />
      </View>



      <ScrollView style={{ backgroundColor: colors.backGround1, height: Dimensions.height }}>
        

 
    {isLoading ? (
                <Loader />
            ) : (
      <FlatList
        key={'*'}
        keyExtractor={(item, index) => index + "_" + item.id.toString()}
        //numColumns={1}
        data={movies}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={1}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }} 
       
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            
              onPress={() => {props.navigation.push('SeriesDetail', { tvId: item.id });}}
              >
              <View>
                <Image
                  source={{
                    //uri: 'https://image.tmdb.org/t/p/w1280/qGA31gx01iIJMgk2MyVgurhCGeO.jpg',
                    uri: `${IMAGE_POSTER_URL}${item.poster_path}`
                  }}
                  style={{
                    //width: 200,
                    //Dimensions.width * 0.5 -
                    height: 300,
                    //margin: 4,
                    //borderRadius:10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      flexWrap: 'wrap',
                      fontSize: 18,
                    }}>
                    {' '}
                    {item.name ? item.name : 'No title'}{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
       
      />
      )}









      </ScrollView>



    </SafeAreaView>
  );
}
export default SearchTmdb;