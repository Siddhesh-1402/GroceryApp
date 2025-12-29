import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../navigation/type';
import { RouteProp } from '@react-navigation/native';


type ProductCategoryRouteProp = RouteProp<RootStackParamList, 'ProductCategory'>;

const ProductCategory = ({ route }: { route: ProductCategoryRouteProp }) => {

    const {Product}=route.params;
  return (
    <View>
      <Text>{Product}</Text>
    </View>
  )
}

export default ProductCategory

const styles = StyleSheet.create({})