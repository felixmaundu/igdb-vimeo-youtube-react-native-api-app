import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getIgdbGames } from '../../services/igdb/IgdbApi';
import Loader from '../../utils/Loader';
import { useTheme } from '@react-navigation/native';
import Axios from 'axios';


const GameCard = props => {
  const [loading, setLoading] = useState(true);
  const [igdbGames, setigdbGames] = useState([]);
  const { colors } = useTheme();
  

  useEffect(() => {
    const getIgdb = async () => {
      const data = await getIgdbGames(props.url);
      setigdbGames(data);
      setLoading(false);
      console.log(data);
    };
    getIgdb();
  }, []);


  const displayGames = ({ item }, props) => {
 
    return (
      <TouchableOpacity>
        <View style={{ color: colors.text, paddingTop:50 }}>
          <Text style={{ margin: 10, color: colors.text }}>
            {item.id}
          </Text>
          <Text  style={{ margin: 10, color: colors.text }}>
            {item.name} hello
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      

      {loading ? (
        <Loader />
      ) : (
       

          <FlatList
            key={'*'}
            keyExtractor={(item, index) => index + "_" + item.id.toString()}
            data={igdbGames}
            horizontal
            renderItem={item => displayGames(item, props)}
          />
       
      )}
    </View>
  );
};







export default GameCard;