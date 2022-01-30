import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

const ProductDetail = ({navigation, route}) => {
  const bread = useSelector(state => state.breads.selected);
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <Image style={styles.img} source={bread.img}/>
          <Text style={styles.title}>{bread.name}</Text>
          <Text style={styles.description}>{bread.description}</Text>
          <Text style={styles.peso}>Peso: {bread.weight}</Text>
          <Text style={styles.price}>$ {bread.price}.-</Text>
        </View>
      </SafeAreaView>
  );
};



export default ProductDetail;