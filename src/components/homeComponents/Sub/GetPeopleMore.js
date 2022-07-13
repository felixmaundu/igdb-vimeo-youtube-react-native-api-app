import React, { useState, useEffect } from 'react';
import { Image, Text, View, Dimensions, TextInput, ScrollView, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import Axios from 'axios';

const GetPeopleMore = (props) => {
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
    const apiURL = `https://api.themoviedb.org/3/person/popular?api_key=53939b3da3d575c42c212fb77c52c5a5&page=${currentPage}`;
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


  const searchPeople = text => {
    let url = `https://api.themoviedb.org/3/search/person?query=${text}&api_key=53939b3da3d575c42c212fb77c52c5a5&page=${currentPage}&language=en-US&include_adult=false`;

    Axios.get(url).then(response => {
      let movies = response.data.results;

      setMovies(movies);
      setIsLoading(false);

    });
  };





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
          source={{   //uri: 'https://image.tmdb.org/t/p/w1280/qGA31gx01iIJMgk2MyVgurhCGeO.jpg',
           uri: `https://image.tmdb.org/t/p/original${item.profile_path}`
           }}
        />
        <TouchableOpacity style={styles.contentWrapperStyle}
          onPress={() => { props.navigation.push('PeopleDetails', { PeopleId: item.id }); }}
        >
          <Text style={{ color: colors.text }}>{item.title}</Text>
          <Text style={{ color: colors.text }}>Media Type: {item.media_type} </Text>
          <Text style={{ color: colors.text }}>popularity: {item.popularity} </Text>
          <Text style={{ color: colors.text }}>Vote Count: {item.vote_count} </Text>
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

      <View>
        <TextInput
          placeholder=" people"
          placeholderTextColor={{ color: colors.text }}
          onChangeText={text => searchPeople(text)}
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
        <View>
          <Text>Top Rated More  </Text>
        </View>

        <FlatList
          key={'*'}

          data={movies}
         
          renderItem={item => renderItem(item, props)}

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


export default GetPeopleMore;