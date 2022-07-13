import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text,TouchableOpacity } from 'react-native';
import { POSTER_IMAGE } from '../../../utils/Config';
import { getOnAirToday } from '../../../services/tmdb/TmdbApi';
import Styles from '../../../utils/Styles';
import Loader from '../../../utils/Loader';
import { useTheme } from '@react-navigation/native';

const PeopleTvDetailPage = props => {
    const [loading, setLoading] = useState(true);
    const [people, setPeople] = useState();
    const { colors } = useTheme();

    useEffect(() => {
        const getPeople = async () => {
            const data = await getOnAirToday(props.url);
            //setPeople(props.isForPage === 'details' ? data.cast : data.results);
            setPeople(data.cast);
            setLoading(false);
            //console.log(data.results);
        };

        getPeople();
    }, []);



    const displayPeople = ({ item }, props) => {
        return (
            <View style={Styles.trendingPeopleContainer}
           
            >
                <TouchableOpacity  onPress={() => {  props.navigation.push('PeopleDetails', { PeopleId: item.id });}}  >

                {/* props.navigation.push('MovieDetails', { movieId: item.id }); */}
                <Image
                    source={{ uri: `${POSTER_IMAGE}${item.profile_path}` }}
                    style={Styles.trendingPeopleImage}
                   
                />
                <Text style={{
                    width: 80,
                    fontSize: 12,
                    textAlign: 'center',
                    marginTop: 1,
                    color: colors.text,
                }}  ellipsizeMode="tail"
                numberOfLines={2}>{item.name}</Text>
                </TouchableOpacity>
               
            </View>
        );
    };

    return (
        <View>
            {loading ? (
                <Loader />
            ) : (
                <View>
                    <Text
                        style={{
                            fontSize: 19,
                            margin: 10,
                            color: colors.text,
                        }}>{props.title}</Text>
                    <FlatList
                        key={'*'}
                        //key={item.id}
                        keyExtractor={(item, index) => index + "_" + item.id.toString()}
                        //keyExtractor={(item, index) => index + "_" + item.id.toString()}
                        data={people}
                        renderItem={item => displayPeople(item, props)}
                        //renderItem={item => displayPeople(item, props)}
                        horizontal
                    />
                </View>
            )}
        </View>
    );
};


export default PeopleTvDetailPage;
