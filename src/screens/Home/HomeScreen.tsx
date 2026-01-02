import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AppInput from '../../components/AppInput';
import { Colors } from '../../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';

const { height, width } = Dimensions.get('window');

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Shop'>;

const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation<HomeNavigationProp>();
  const listRef = useRef<FlatList>(null);
  

  const handleNavigate = (item: any) => {
    navigation.navigate('ProductDetails', { Product: item });
  };

  const ImageSlide = [
    { id: 1, image: require('../../assets/images/Banner1.jpg') },
    { id: 2, image: require('../../assets/images/Banner2.jpg') },
    { id: 3, image: require('../../assets/images/Banner3.jpg') },
  ];

  const ExclusiveOffer = [
    { id: 1, image: require('../../assets/images/Fruite1.jpg'), name: 'Orange',price:20 },
    { id: 2, image: require('../../assets/images/Fruite2.jpg'), name: 'Banana',price:30 },
    { id: 3, image: require('../../assets/images/Fruite3.jpg'), name: 'Papaya',price:50 },
    { id: 4, image: require('../../assets/images/Fruite4.jpg'), name: 'Strawbwery',price:40  },
    { id: 5, image: require('../../assets/images/Fruite5.jpg'), name: 'PineApple',price:10  },
  ];

  const BestSelling = [
    { id: 1, image: require('../../assets/images/Fruite6.jpg'), name: 'Kiwi' ,price:50 },
    { id: 2, image: require('../../assets/images/Fruite7.jpg'), name: 'Cherry',price:30  },
    { id: 3, image: require('../../assets/images/Fruite8.jpg'), name: 'Grapes',price:60  },
    { id: 4, image: require('../../assets/images/Fruite9.jpg'), name: 'Pomegranate',price:40  },
    { id: 5, image: require('../../assets/images/Fruite10.jpg'), name: 'Guava',price:20  },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => {
        const next = prev + 1 >= ImageSlide.length ? 0 : prev + 1;
        listRef.current?.scrollToIndex({ index: next, animated: true });
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <StatusBar barStyle="dark-content" backgroundColor={Colors.whiteFF} translucent />
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/Group.png')} style={styles.logo} />
        <View style={styles.locationRow}>
          <Image source={require('../../assets/images/location.png')} />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Image source={require('../../assets/images/Vector-Search.png')} style={styles.searchIcon} />
        <AppInput placeholder="search store"  autoFocus={false}/>
      </View>

      {/* Slider */}
      <View style={styles.sliderWrapper}>
        <FlatList
          ref={listRef}
          data={ImageSlide}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          onMomentumScrollEnd={e => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setActiveSlide(index);
          }}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.sliderImage} />
          )}
        />

        <View style={styles.dotContainer}>
          {ImageSlide.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeSlide === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>

    
        {/* Exclusive */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <FlatList
          horizontal
          data={ExclusiveOffer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.cardList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleNavigate(item)}
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Image source={require('../../assets/images/Vector-plus.png')} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <FlatList
          horizontal
          data={BestSelling}
          keyExtractor={item => item.id.toString()}
           showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleNavigate(item)}
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Image source={require('../../assets/images/Vector-plus.png')} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: height * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  logo: {
    height: 20,
    width: 20,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  locationText: {
    fontSize: 16,
  },

  searchBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: Colors.greyF2,
    borderRadius: 10,
  },

  searchIcon: {
    margin: 10,
  },

  sliderWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  sliderImage: {
    height: 200,
    width: width * 0.9,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: Colors.green75,
    width: 10,
    height: 10,
  },

  scrollView: {
    marginTop: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
  },

  seeAll: {
    color: Colors.green75,
  },

  cardList: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: Colors.grayE2,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },

  cardImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: '500',
  },

  addBtn: {
    backgroundColor: Colors.green75,
    padding: 10,
    borderRadius: 10,
  },
});
