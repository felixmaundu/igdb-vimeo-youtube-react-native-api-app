import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { POSTER_IMAGE, IMAGE_POSTER_URL } from '../../../utils/Config';
import { getOnAirToday } from '../../../services/tmdb/TmdbApi';
import Styles from '../../../utils/Styles';
import Loader from '../../../utils/Loader';

const TaggedImageShow = props => {
    const dispatch = useDispatch()
    const { colors } = useTheme()
    const currentTheme = useSelector(state => {

        return state.myDarMode
    })
    const mycolor = colors.iconColor

    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState();


    useEffect(() => {
        const getImages = async () => {
            const data = await getOnAirToday(props.url);
            setImages(data.results);
            setLoading(false);
           // console.log(data.results);
        };

        getImages();
    }, []);







    const displayImages = ({ item }, props) => {
        return (
            <TouchableOpacity>
                <View   style={{ width: 255,height:410,marginBottom:80 }}>
                    <Image
                        source={{ uri: `${IMAGE_POSTER_URL}${item.file_path}` }}
                        //source={{ uri: "https://th.bing.com/th/id/R.2b45da6bd7e3ecc73758b235278e2164?rik=FC77H7OnQYo4dQ&pid=ImgRaw&r=0" }}
                        style={{ padding:10,width: 250, height: 400, margin: 10, borderRadius: 7 }} //person/{person_id}/images
                    />

                    <Text style={{ color: colors.darkyellow }}>Title {item.title}</Text>
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
                        keyExtractor={(item, index) =>item.id}
                        //keyExtractor={(item, index) => index + "_" + item.id.toString()}
                        data={images}
                        horizontal
                        renderItem={item => displayImages(item, props)}
                    />







                </View>
            )}



        </ScrollView>




    );
}
export default TaggedImageShow;