import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';

import AppInput from '../../components/AppInput';
import { useNavigation } from '@react-navigation/native';
import ProductCategory from '../Category/ProductCategory';

const { height, width } = Dimensions.get('window');

const Categories = [
  {
    id: 1,
    name: 'Fresh Fruits & Vegetables',
    backgroundColor: '#53B1751A',
    image: require('../../assets/images/Fruits&veg.png'),
    Product: [
      {
        id: 1,
        name: 'Apple',
        price: 120,
        image: 'https://via.placeholder.com/150',
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Banana',
        price: 40,
        image: 'https://via.placeholder.com/150',
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Tomato',
        price: 30,
        image: 'https://via.placeholder.com/150',
        categoryId: 1,
      },
      {
        id: 4,
        name: 'Potato',
        price: 25,
        image: 'https://via.placeholder.com/150',
        categoryId: 1,
      },
      {
        id: 5,
        name: 'Onion',
        price: 35,
        image: 'https://via.placeholder.com/150',
        categoryId: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Cooking Oil & Ghee',
    backgroundColor: '#F8A44C1A',
    image: require('../../assets/images/Cookingoil.png'),
    Product:[
      { id: 6, name: 'Sunflower Oil', price: 180, image: 'https://via.placeholder.com/150', categoryId: 2 },
  { id: 7, name: 'Mustard Oil', price: 160, image: 'https://via.placeholder.com/150', categoryId: 2 },
  { id: 8, name: 'Olive Oil', price: 420, image: 'https://via.placeholder.com/150', categoryId: 2 },
  { id: 9, name: 'Coconut Oil', price: 250, image: 'https://via.placeholder.com/150', categoryId: 2 },
  { id: 10, name: 'Desi Ghee', price: 550, image: 'https://via.placeholder.com/150', categoryId: 2 },

    ]
  },
  {
    id: 3,
    name: 'Meat & Fish',
    backgroundColor: '#F7A59340',
    image: require('../../assets/images/Meat&Fish.png'),
        Product:[
           { id: 11, name: 'Chicken Breast', price: 260, image: 'https://via.placeholder.com/150', categoryId: 3 },
  { id: 12, name: 'Chicken Curry Cut', price: 220, image: 'https://via.placeholder.com/150', categoryId: 3 },
  { id: 13, name: 'Mutton', price: 650, image: 'https://via.placeholder.com/150', categoryId: 3 },
  { id: 14, name: 'Fish Rohu', price: 300, image: 'https://via.placeholder.com/150', categoryId: 3 },
  { id: 15, name: 'Fish Prawns', price: 450, image: 'https://via.placeholder.com/150', categoryId: 3 },

        ]
  },
  {
    id: 4,
    name: 'Bakery & Snacks',
    backgroundColor: '#D3B0E040',
    image: require('../../assets/images/Backery&Snack.png'),
        Product:[
           { id: 16, name: 'Bread', price: 40, image: 'https://via.placeholder.com/150', categoryId: 4 },
  { id: 17, name: 'Cake', price: 250, image: 'https://via.placeholder.com/150', categoryId: 4 },
  { id: 18, name: 'Cookies', price: 60, image: 'https://via.placeholder.com/150', categoryId: 4 },
  { id: 19, name: 'Chips', price: 20, image: 'https://via.placeholder.com/150', categoryId: 4 },
  { id: 20, name: 'Donut', price: 70, image: 'https://via.placeholder.com/150', categoryId: 4 },

        ]
  },
  {
    id: 5,
    name: 'Dairy & Eggs',
    backgroundColor: '#FDE59840',
    image: require('../../assets/images/Dairy&Eggs.png'),
        Product:[
           { id: 21, name: 'Milk', price: 55, image: 'https://via.placeholder.com/150', categoryId: 5 },
  { id: 22, name: 'Curd', price: 45, image: 'https://via.placeholder.com/150', categoryId: 5 },
  { id: 23, name: 'Butter', price: 90, image: 'https://via.placeholder.com/150', categoryId: 5 },
  { id: 24, name: 'Paneer', price: 180, image: 'https://via.placeholder.com/150', categoryId: 5 },
  { id: 25, name: 'Eggs', price: 85, image: 'https://via.placeholder.com/150', categoryId: 5 },

        ]
  },
  {
    id: 6,
    name: 'Beverages',
    backgroundColor: '#B7DFF540',
    image: require('../../assets/images/Beverages.png'),
        Product:[
          { id: 26, name: 'Coca Cola', price: 40, image: 'https://via.placeholder.com/150', categoryId: 6 },
  { id: 27, name: 'Pepsi', price: 40, image: 'https://via.placeholder.com/150', categoryId: 6 },
  { id: 28, name: 'Orange Juice', price: 60, image: 'https://via.placeholder.com/150', categoryId: 6 },
  { id: 29, name: 'Cold Coffee', price: 70, image: 'https://via.placeholder.com/150', categoryId: 6 },
  { id: 30, name: 'Mineral Water', price: 20, image: 'https://via.placeholder.com/150', categoryId: 6 }

        ]
  },
];

const Explore = () => {
  const navigation=useNavigation()
const handleNavigate=(item:any)=>{
    // navigation.navigate();

}

  return (
    <View style={styles.container}>
      <View style={{ height: '8%', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 600 }}>
          Find Products
        </Text>
      </View>
      <View style={styles.searchBox}>
        <Image
          source={require('../../assets/images/Vector-Search.png')}
          style={styles.searchIcon}
        />
        <AppInput placeholder="search store" autoFocus={true} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={Categories}
          // horizontal
          contentContainerStyle={{ padding: 12 }}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 8 }} onPress={()=>handleNavigate(item as never)}>
              <View
                style={{
                  height: 200,
                  width: 170,
                  backgroundColor: item.backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: item.backgroundColor,
                  borderWidth: 2,
                  gap: 10,
                }}
                key={item.id}
              >
                <Image
                  source={item.image}
                  style={{ height: 120, width: 120, objectFit: 'contain' }}
                />
                <Text
                  style={{ textAlign: 'center', fontWeight: 500, width: 100 }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    marginBottom: 20,
  },

  searchIcon: {
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imageWrapper: {
    height: height * 0.5,
    elevation: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },

  productImage: {
    height: height * 0.5,
    width: width,
    resizeMode: 'cover',
  },

  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.whiteFF,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },

  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },

  quantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  qtyBox: {
    flexDirection: 'row',
    gap: 20,
  },

  qtyText: {
    fontSize: 30,
  },

  qtyNumber: {
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 10,
  },

  qtyPlus: {
    fontSize: 30,
    color: Colors.green75,
  },

  priceText: {
    fontSize: 20,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },

  sectionTitle: {
    fontWeight: '500',
  },

  description: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  reviewRow: {
    flexDirection: 'row',
    gap: 20,
  },

  buttonWrapper: {
    padding: 10,
  },
});
