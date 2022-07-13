import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';

import { getYoutube } from '../../services/yt/YoutubeApi';
import Axios from 'axios';
import Loader from '../../utils/Loader';
import { useTheme } from '@react-navigation/native';


const ListCard = props => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState();
    const { colors } = useTheme();

    // useEffect(() => {
    //     const getList = async () => {
    //         const data = await getYoutube(props.url);

    //         setList(data);
    //         setLoading(false);
    //         console.log(data)
    //     };

    //     getList();
    // }, []);

 
    const searchYoutube = text => {
        
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCcqKUoT2fxC0IO2-Ei-YVDIiDN5qckM-8&maxResults=50&q=${text}`;

        Axios.get(url).then(response => {
            let data = response.data;
            //setLoading(true);
            setList(data.snippet);
            setLoading(true);
            console.log(data)
        });
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    const renderLoader = () => {
        return (
            loading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };

    return (
        <View style={{}}>
            <View>
                <TextInput
                    style={{
                        margin: 10,
                        borderRadius: 7,
                        backgroundColor: "#969696",
                        color: 'white'
                    }}
                    placeholder="Search Youtube"
                    placeholderTextColor="white"
                    onChangeText={text => searchYoutube(text)}
                />
            </View>



            {loading ? (
                <Loader />
            ) : (
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        (
                            <TouchableOpacity>
                                <View>

                                    <Text>{item.title}</Text>

                                </View>
                            </TouchableOpacity>
                        );
                    }}
                   
                />
            )}
        </View>
    );
};


export default ListCard;
