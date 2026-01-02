import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import { Colors } from '../../theme/Colors';
import FilterScreen from '../Filter/FilterScreen';
import { useCart } from '../../context/CartContext';

type ProductCategoryRouteProp = RouteProp<
  RootStackParamList,
  'ProductCategory'
>;

const ProductCategory = ({ route }: { route: ProductCategoryRouteProp }) => {
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const {addToCart}=useCart()

    const handleNavigate = (item: any) => {
    navigation.navigate('ProductDetails', { Product: item });
  };

  const { name, Product } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/Vector.png')} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{name || 'Category'}</Text>

        <TouchableOpacity onPress={() => setShowFilter(true)}>
          <Image source={require('../../assets/images/Filter.png')} />
        </TouchableOpacity>

        <FilterScreen
          visible={showFilter}
          onClose={() => setShowFilter(false)}
        />
      </View>

      {/* Product List */}
      <FlatList
        data={Product || []}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardWrapper} onPress={() => handleNavigate(item)}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.productImage} />

              <Text style={styles.productName}>{item.name}</Text>

              <View style={styles.footerRow}>
                <Text style={styles.price}>${item.price}</Text>

                <TouchableOpacity style={styles.addBtn} onPress={()=> addToCart(item)}>
                  <Image
                    source={require('../../assets/images/Vector-plus.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductCategory;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    padding: 26,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  listContainer: {
    padding: 12,
  },

  cardWrapper: {
    padding: 8,
  },

  card: {
    height: 230,
    width: 170,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d4cdcdff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  productImage: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },

  productName: {
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
    paddingLeft: 10,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
  },

  addBtn: {
    backgroundColor: Colors.green75,
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
