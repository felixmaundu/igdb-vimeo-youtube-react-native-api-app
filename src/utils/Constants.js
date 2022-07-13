import {Dimensions} from 'react-native';


const constants = {
  textColor: '#fff',
  baseColor: '#151C26',
  fadedColor: '#969696',
  secondaryColor: '#F4C10F',
};

export default constants;

const imagePrefix = `https://image.tmdb.org/t/p/w1280`;
const defaultImage = `https://image.tmdb.org/t/p/w1280/qGA31gx01iIJMgk2MyVgurhCGeO.jpg`;
const {width, height} = Dimensions.get('window');
const fontSize = {
  large: 50,
  medium: 25,
  small: 18,
};

const genImageUrl = url => {
  let imageUrl = `${imagePrefix}${url}`;

  return imageUrl;
};
const colors = {
  primary: '#F5C518',
  lightGrey: '#F0F0F0',
};
export {
  imagePrefix,
  defaultImage,
  fontSize,
  colors,
  genImageUrl,
  width,
  height,
  //constants
};
