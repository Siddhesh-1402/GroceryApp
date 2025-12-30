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
import React, { useState } from 'react';
import { Colors } from '../../theme/Colors';

import AppInput from '../../components/AppInput';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import ProductCategory from '../Category/ProductCategory';
import FilterScreen from '../Filter/FilterScreen';

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
        image: require('../../assets/images/Apple.png'),
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Banana',
        price: 40,
        image: require('../../assets/images/Fruite2.jpg'),
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Tomato',
        price: 30,
        image: require('../../assets/images/Tomato.jpg'),
        categoryId: 1,
      },
      {
        id: 4,
        name: 'Potato',
        price: 25,
        image: require('../../assets/images/Potato.jpg'),
        categoryId: 1,
      },
      {
        id: 5,
        name: 'Onion',
        price: 35,
        image: require('../../assets/images/Onion.jpg'),
        categoryId: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Cooking Oil & Ghee',
    backgroundColor: '#F8A44C1A',
    image: require('../../assets/images/Cookingoil.png'),
    Product: [
      {
        id: 6,
        name: 'Sunflower Oil',
        price: 180,
        image: require('../../assets/images/SunflowerOil.jpg'),
        categoryId: 2,
      },
      {
        id: 7,
        name: 'Mustard Oil',
        price: 160,
        image: require('../../assets/images/MustardOil.jpg'),
        categoryId: 2,
      },
      {
        id: 8,
        name: 'Olive Oil',
        price: 420,
        image: require('../../assets/images/OliveOil.jpg'),
        categoryId: 2,
      },
      {
        id: 9,
        name: 'Coconut Oil',
        price: 250,
        image: require('../../assets/images/CoconutOil.jpg'),
        categoryId: 2,
      },
      {
        id: 10,
        name: 'Desi Ghee',
        price: 550,
        image: require('../../assets/images/DesiGhee.jpg'),
        categoryId: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Meat & Fish',
    backgroundColor: '#F7A59340',
    image: require('../../assets/images/Meat&Fish.png'),
    Product: [
      {
        id: 11,
        name: 'Chicken Breast',
        price: 260,
        image: require('../../assets/images/ChickenBreast.jpg'),
        categoryId: 3,
      },
      {
        id: 12,
        name: 'Chicken Curry Cut',
        price: 220,
        imager: require('../../assets/images/ChickenCurryCut.jpg'),
        categoryId: 3,
      },
      {
        id: 13,
        name: 'Mutton',
        price: 650,
        image: require('../../assets/images/Mutton.jpg'),
        categoryId: 3,
      },
      {
        id: 14,
        name: 'Fish Rohu',
        price: 300,
        image: require('../../assets/images/FishRohu.jpg'),
        categoryId: 3,
      },
      {
        id: 15,
        name: 'Fish Prawns',
        price: 450,
        image: require('../../assets/images/FishPrawns.jpg'),
        categoryId: 3,
      },
    ],
  },
  {
    id: 4,
    name: 'Bakery & Snacks',
    backgroundColor: '#D3B0E040',
    image: require('../../assets/images/Backery&Snack.png'),
    Product: [
      {
        id: 16,
        name: 'Bread',
        price: 40,
        image: require('../../assets/images/Bread.jpg'),
        categoryId: 4,
      },
      {
        id: 17,
        name: 'Cake',
        price: 250,
        image: require('../../assets/images/Cake.jpg'),
        categoryId: 4,
      },
      {
        id: 18,
        name: 'Cookies',
        price: 60,
        image: require('../../assets/images/Cookies.jpg'),
        categoryId: 4,
      },
      {
        id: 19,
        name: 'Chips',
        price: 20,
        image: require('../../assets/images/Chips.jpg'),
        categoryId: 4,
      },
      {
        id: 20,
        name: 'Donut',
        price: 70,
        image: require('../../assets/images/Donut.jpg'),
        categoryId: 4,
      },
    ],
  },
  {
    id: 5,
    name: 'Dairy & Eggs',
    backgroundColor: '#FDE59840',
    image: require('../../assets/images/Dairy&Eggs.png'),
    Product: [
      {
        id: 21,
        name: 'Milk',
        price: 55,
        image: require('../../assets/images/Milk.jpg'),
        categoryId: 5,
      },
      {
        id: 22,
        name: 'Curd',
        price: 45,
        image: require('../../assets/images/Curd.jpg'),
        categoryId: 5,
      },
      {
        id: 23,
        name: 'Butter',
        price: 90,
        image: require('../../assets/images/Butter.jpg'),
        categoryId: 5,
      },
      {
        id: 24,
        name: 'Paneer',
        price: 180,
        image: require('../../assets/images/Paneer.jpg'),
        categoryId: 5,
      },
      {
        id: 25,
        name: 'Eggs',
        price: 85,
        image: require('../../assets/images/Eggs.jpg'),
        categoryId: 5,
      },
    ],
  },
  {
    id: 6,
    name: 'Beverages',
    backgroundColor: '#B7DFF540',
    image: require('../../assets/images/Beverages.png'),
    Product: [
      {
        id: 26,
        name: 'Coca Cola',
        price: 40,
        image: require('../../assets/images/CocaCola.jpg'),
        categoryId: 6,
      },
      {
        id: 27,
        name: 'Pepsi',
        price: 40,
        image: require('../../assets/images/Pepsi.jpg'),
        categoryId: 6,
      },
      {
        id: 28,
        name: 'Orange Juice',
        price: 60,
        image: require('../../assets/images/OrangeJuice.jpg'),
        categoryId: 6,
      },
      {
        id: 29,
        name: 'Cold Coffee',
        price: 70,
        image: require('../../assets/images/ColdCoffee.jpg'),
        categoryId: 6,
      },
      {
        id: 30,
        name: 'Mineral Water',
        price: 20,
        image: require('../../assets/images/MineralWater.jpg'),
        categoryId: 6,
      },
    ],
  },
];

const Explore = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const allProducts = Categories.flatMap(cat =>
    cat.Product.map(p => ({ ...p, categoryName: cat.name })),
  );

  const filteredProducts = allProducts.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleCategoryPress = item => {
    navigation.navigate('ProductCategory', item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Find Products</Text>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Image
            source={require('../../assets/images/Vector-Search.png')}
            style={styles.searchIcon}
          />

          <AppInput
            placeholder="Search Store"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />

          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Image
                source={require('../../assets/images/Clear.png')}
                style={styles.clearIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        {searchText.length > 0 && filteredProducts.length > 0 && (
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilter(true)}
          >
            <Image
              source={require('../../assets/images/Filter.png')}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      <FilterScreen visible={showFilter} onClose={() => setShowFilter(false)} />

      {searchText.length > 0 ? (
        filteredProducts.length > 0 ? (
          <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <View style={styles.productWrapper}>
                <View style={styles.productCard}>
                  <Image source={item.image} style={styles.productImage} />

                  <Text style={styles.productName}>{item.name}</Text>

                  <View style={styles.productFooter}>
                    <Text style={styles.productPrice}>${item.price}</Text>

                    <TouchableOpacity style={styles.addBtn}>
                      <Image
                        source={require('../../assets/images/Vector-plus.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        ) : (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}>No products found</Text>
            <Text style={styles.noResultSubText}>
              Try searching with different keywords
            </Text>
          </View>
        )
      ) : (
        <FlatList
          data={Categories}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryWrapper}
              onPress={() => handleCategoryPress(item)}
            >
              <View
                style={[
                  styles.categoryCard,
                  {
                    backgroundColor: item.backgroundColor,
                    borderColor: item.backgroundColor,
                  },
                ]}
              >
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  searchBox: {
    flex: 1,
    height: 42,
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#777',
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#000',
  },

  clearIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 20,
    top: -8,
  },

  filterButton: {
    marginLeft: 12,
    height: 48,
    width: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterIcon: {
    width: 16,
    height: 16,
  },

  listContainer: {
    padding: 12,
  },

  productWrapper: {
    padding: 8,
  },

  productCard: {
    height: 230,
    width: 170,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d4cdcdff',
    justifyContent: 'center',
    alignItems: 'center',
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

  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },

  productPrice: {
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

  categoryWrapper: {
    padding: 8,
  },

  categoryCard: {
    height: 200,
    width: 170,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },

  categoryImage: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },

  categoryText: {
    textAlign: 'center',
    fontWeight: '500',
    width: '50%',
  },

  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  noResultText: {
    fontSize: 18,
    fontWeight: '600',
  },

  noResultSubText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});
