import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Linking, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getOnAirToday } from '../../../services/tmdb/TmdbApi';
import { IMAGE_POSTER_URL } from '../../../utils/Config';
import Loader from '../../../utils/Loader';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import SeriesCard from '../SeriesCard';
import People from '../People';
import VideoList from './VideoList';
import { colors } from '../../../utils/Constants';
import PeopleTvDetailPage from './PeopleTvDetailPage'

const SeriesDetail = props => {
  const [loading, setLoading] = useState(true);
  const [tvdetails, setTvDetails] = useState();

  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const currentTheme = useSelector(state => {

    return state.myDarMode
  })
  const mycolor = colors.iconColor

  useEffect(() => {
    const getDetails = async () => {
      const data = await getOnAirToday(`tv/${props.route.params.tvId}`);
      setTvDetails(data);
      setLoading(false);
    };
    getDetails();
  }, []);


  const getGenre = () => {
    return tvdetails.genres.map(genre => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      }}>
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>
          {genre.name}
        </Text>
      </View>
    ));
  };

  const getCreatedBy = () => {
    return tvdetails.created_by.map(createdby => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      }}>
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>
          {createdby.name} Name
        </Text>
      </View>
    ));
  };

  const getNetworks = () => {
    return tvdetails.networks.map(network => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      }}>
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>{network.name}</Text>
      </View>
    ));
  };

  const getProductionCompanies = () => {
    return tvdetails.production_companies.map(productioncompanies => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      }}>
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>{productioncompanies.name}</Text>
      </View>
    ));
  };

  const getProductionCountries = () => {
    return tvdetails.production_countries.map(productioncountries => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      }}>
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>{productioncountries.name}</Text>
      </View>
    ));
  };

  const getSeasons = (props) => {
    return tvdetails.seasons.map(season => (
      <TouchableOpacity style={{ borderWidth: 1, borderRadius: 5, borderColor: colors.text, paddingHorizontal: 10, paddingVertical: 5, marginHorizontal: 10, backgroundColor: 'red' }}
        onPress={() => { props.navigation.push('Season Trailers', { SeasonTrailerId: tvdetails.id }); }}
      >
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>
          {season.name}
          </Text>
      </TouchableOpacity>
    ));
  };

  const getSpokenLanguages = () => {
    return tvdetails.spoken_languages.map(spokenlanguages => (
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      }}>
        <Text style={{ display: 'flex', flexDirection: 'row', color: colors.text, fontSize: 16, }}>{spokenlanguages.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={{
      flex: 1,
      //justifyContent: 'center', alignItems: 'center',
      height: Dimensions.height,
      backgroundColor: colors.backGround1
    }}>

      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${tvdetails.backdrop_path}` }}
              style={Style.imageBg}
            />
          </View>
          <Text style={Style.detailsMovieTitle}>{tvdetails.original_title}</Text>

          {tvdetails.homepage ? (
            <View >
              {/* //linkContainer */}
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(tvdetails.homepage);
                }} style={{ flexDirection: 'row', marginStart: 20, alignItems: "center", }}>
                <FontAwesomeIcon name="link" color={colors.textColor} size={22} />
                <View style={{ padding: 10 }}>
                  <Text>Home Page</Text>
                  <Text style={{ fontSize: 15, color: 'red' }}>{tvdetails.homepage}</Text>
                  <Text style={{ fontSize: 20, color: 'yellow' }}>{tvdetails.name}</Text>
                </View>

              </TouchableOpacity>
            </View>
          ) : null}









          <Text style={{ color: colors.text, margin: 10, fontSize: 20 }}>GENRE</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 20 }}>
                {getGenre()}
              </View>

            </View>
          </ScrollView>
          <Text style={{ color: colors.text, margin: 10, fontSize: 20 }}>Created By:</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 20 }}>
                {getCreatedBy()}
              </View>

            </View>
          </ScrollView>
          <Text style={{ color: colors.text, margin: 2, fontSize: 20 }}>NetWorks</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 2 }}>
                {getNetworks()}
              </View>

            </View>
          </ScrollView>

          <Text style={{ color: colors.text, margin: 1, fontSize: 20 }}>Production Companies</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 2 }}>
                {getProductionCompanies()}
              </View>

            </View>
          </ScrollView>
          <Text style={{ color: colors.text, margin: 1, fontSize: 20 }}>Production Countries</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 2 }}>
                {getProductionCountries()}
              </View>

            </View>
          </ScrollView>
          <Text style={{ color: colors.text, margin: 2, fontSize: 20 }}>Spoken Languages</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 2 }}>
                {getSpokenLanguages()}
              </View>

            </View>
          </ScrollView>
          <Text style={{ color: colors.text, margin: 2, fontSize: 20 }}>Seasons</Text>
          <ScrollView
            horizontal={true}>
            <View >

              <View style={{ display: 'flex', flexDirection: 'row', color: colors.text, margin: 2, }}>
                {getSeasons( props)}
              </View>

            </View>
          </ScrollView>














          <ScrollView
            horizontal={true}>

            <View style={Style.detailsContainer}>
              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>BUDGET</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>
                  {tvdetails.budget ? (
                    tvdetails.budget
                  ) : <Text>N/A</Text>}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>STATUS</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>
                 {tvdetails.status ? (
                    tvdetails.status
                  ) : <Text>Unknown</Text>}
                </Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>DURATION</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>
                 {tvdetails.runtime ? (
                    tvdetails.runtime
                  ) : <Text>Unknown </Text>}
                 min.</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>ORIGINAL NAME</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>{tvdetails.original_name}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>SEASONS</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>{tvdetails.number_of_seasons}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>EPISODES</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>{tvdetails.number_of_episodes}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>TYPE</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>{tvdetails.type}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>FIRST AIR DATE</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }} >{tvdetails.first_air_date}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>LAST AIR DATE</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>{tvdetails.last_air_date}</Text>
              </View>

              <View>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>TAGLINE</Text>
                <Text style={{
                  fontSize: 19,
                  color: colors.darkyellow,
                  margin: 10,
                }}>{tvdetails.tagline}</Text>
              </View>

            </View>
          </ScrollView>

          <View style={{
            fontSize: 19,
            margin: 10,
            color: colors.text,
          }}>
            <Text style={{
              fontSize: 19,
              color: colors.darkyellow,
              margin: 10,
            }}>OVERVIEW</Text>
            <Text style={{
              fontSize: 20,
              color: colors.text,
              textAlign: 'center',
              marginTop: 10,
            }}>{tvdetails.overview}</Text>
          </View>

          <PeopleTvDetailPage
            title="Cast and Crew"
            url={`tv/${props.route.params.tvId}/credits`}
            //isForPage="details"
            navigation={props.navigation}
          />

          <View>
            <VideoList
              title="TRAILER"
              url={`tv/${props.route.params.tvId}/videos`}

            />
          </View>




          <View>
            <SeriesCard
              title="Similar"
              url={`tv/${props.route.params.tvId}/similar`}
              navigation={props.navigation}
            />
            <SeriesCard
              title="Recommendations"
              url={`tv/${props.route.params.tvId}/recommendations`}
              navigation={props.navigation}
            />
          </View>
        </View>
      )}

    </ScrollView>
  );
}


const Style = StyleSheet.create({

  trendingPeopleImage: {
    height: 90,
    width: 90,
    borderRadius: 400,
  },

  holdsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },

  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: colors.darkyellow,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  imageBg: {
    width: Dimensions.width,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: colors.textColor,
    textAlign: 'center',
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 100,
    padding: 10,
    flexDirection: 'row',
    display: 'flex',
    //width: 45,
    //marginLeft: 20,
    //marginTop: -20,
  },
  overview: {
    color: colors.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: colors.darkyellow,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: colors.textColor,
    fontSize: 16,
  },

})
export default SeriesDetail;