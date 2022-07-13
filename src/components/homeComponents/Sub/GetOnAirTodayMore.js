import React from 'react';
import { Image,Text, View, Dimensions, ScrollView, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';

const GetOnAirTodayMore = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

      return state.myDarMode
  })
  const mycolor = colors.iconColor

  const getMovies = () => {
      const apiURL = `https://api.themoviedb.org/3/tv/airing_today?api_key=53939b3da3d575c42c212fb77c52c5a5&page=${currentPage}`;
      fetch(apiURL)
          .then((response) => response.json())
          .then((responseJson) => {
              setMovies([...movies, ...responseJson.results]);
              //console.log(responseJson);
              setIsLoading(false);
          }).catch((error) => {
              console.log(error);
          })
  }


  useEffect(() => { getMovies(); }, [currentPage]);

  const renderLoader = () => {
      return (
          isLoading ?
              <View style={styles.loaderStyle}>
                  <ActivityIndicator size="large" color="#aaa" />
              </View> : null
      );
  };
  const loadMoreItem = () => { setCurrentPage(currentPage + 1); };
  const renderItem = ({ item }, props) => {
      return (
          <TouchableOpacity style={styles.itemWrapperStyle}

          >
              <Image style={styles.itemImageStyle}
                  source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              />
              <TouchableOpacity style={styles.contentWrapperStyle}
                  onPress={() =>
                      props.navigation.navigate('SeriesDetail', { tvId: item.id })}
              >
                  <Text style={{ color: colors.text }}>{item.name}</Text>
                  <Text style={{ color: colors.text }}>Vote Count: {item.vote_count} </Text>
                  <Text style={{ color: colors.text }}>vote average: {item.vote_average} </Text>
                  <Text style={{ color: colors.text }}>Release Date: {item.release_date} </Text>
                  <Text style={{ color: colors.text, }}>Language: {item.original_language}</Text>
              </TouchableOpacity>
          </TouchableOpacity>
      );
  };










  return (
      <SafeAreaView style={{
          flex: 1,
          //justifyContent: 'center', alignItems: 'center',
          height: Dimensions.height,
          backgroundColor: colors.backGround1
      }}>
          <ScrollView style={{ backgroundColor: colors.backGround1, height: Dimensions.height }}>
              <View>
                  <Text>Top Rated More  </Text>
              </View>

              <FlatList
                  key={'*'}
                  //key={item.id}
                  data={movies}
                  //renderItem={renderItem}
                  renderItem={item => renderItem(item, props)}
                  //onPress={() => navigation.navigate("SubDetail", { movieId: item.id })}
                  keyExtractor={(item, index) => index + "_" + item.id.toString()}
                  ListFooterComponent={renderLoader}
                  onEndReached={loadMoreItem}
                  onEndReachedThreshold={0.5}

              />





          </ScrollView>



      </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  itemWrapperStyle: {
      flexDirection: "row",
      paddingHorizontal: 6,
      paddingVertical: 6,
      //borderBottomWidth: 1,
      //borderColor: "#ddd",
  },
  itemImageStyle: {
      width: 120,
      height: 180,
      marginRight: 16,
  },
  // contentWrapperStyle: {
  // justifyContent: "space-around",
  //  },
  txtNameStyle: {
      fontSize: 16,
      // color: "white",
  },
  txtEmailStyle: {

  },
  loaderStyle: {
      margin: 20,
      alignItems: "center",

  },
  modal: {
      justifyContent: 'flex-end',
      margin: 0,
  },
  modalButtonContainer: {
      //flexDirection:'Horizontal'
  },
  modalContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 40,
      alignItems: 'center',
  },
  modalTitle: {
      fontSize: 22,
      fontWeight: '600',
  },
  modalText: {
      fontSize: 18,
      color: '#555',
      marginTop: 14,
      textAlign: 'center',
      marginBottom: 10,
  },
  button: {
      backgroundColor: '#000',
      paddingVertical: 12,
      paddingHorizontal: 16,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
  },
  buttonText: {
      color: '#fff',
      fontSize: 20,
  },
});



export default GetOnAirTodayMore;