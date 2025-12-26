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

  const handleNavigate = (item: any) => {
    navigation.navigate('ProductDetails', { Product: item });
  };

  const listRef = useRef(null);

  const ImageSlide = [
    { id: 1, image: require('../../assets/images/Banner1.jpg') },
    { id: 2, image: require('../../assets/images/Banner2.jpg') },
    { id: 3, image: require('../../assets/images/Banner3.jpg') },
  ];

  const ExclusiveOffer = [
    {
      id: 1,
      image: require('../../assets/images/Fruite1.jpg'),
      name: 'Orange',
    },
    {
      id: 2,
      image: require('../../assets/images/Fruite2.jpg'),
      name: 'Banana',
    },
    {
      id: 3,
      image: require('../../assets/images/Fruite3.jpg'),
      name: 'Papaya',
    },
    {
      id: 4,
      image: require('../../assets/images/Fruite4.jpg'),
      name: 'Strawbwery',
    },
    {
      id: 5,
      image: require('../../assets/images/Fruite5.jpg'),
      name: 'PineApple',
    },
  ];

  const BestSelling = [
    { id: 1, image: require('../../assets/images/Fruite6.jpg'), name: 'Kiwi' },
    {
      id: 2,
      image: require('../../assets/images/Fruite7.jpg'),
      name: 'Cherry',
    },
    {
      id: 3,
      image: require('../../assets/images/Fruite8.jpg'),
      name: 'Grapes',
    },
    {
      id: 4,
      image: require('../../assets/images/Fruite9.jpg'),
      name: 'Pomegranate',
    },
    {
      id: 5,
      image: require('../../assets/images/Fruite10.jpg'),
      name: 'Guava',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => {
        const next = prev + 1 >= ImageSlide.length ? 0 : prev + 1;
        (listRef.current as any)?.scrollToIndex({
          index: next,
          animated: true,
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View
        style={{
          height: height * 0.13,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Image
          source={require('../../assets/images/Group.png')}
          style={{ height: 20, width: 20, alignItems: 'center' }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Image source={require('../../assets/images/location.png')} />
          <Text style={{ fontSize: 16 }}>Dhaka,Banassre</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          backgroundColor: Colors.greyF2,
          borderRadius: 10,
        }}
      >
        <Image
          source={require('../../assets/images/Vector-Search.png')}
          style={{ margin: 10 }}
        />
        <AppInput placeholder="search store" />
      </View>

      {/* Slider */}

      <View style={{ paddingInline: 20, top: 20, marginBottom: 20 }}>
        <FlatList
          data={ImageSlide}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ gap: 10 }}
          horizontal={true}
          ref={listRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setActiveSlide(index);
          }}
          renderItem={({ item }) => (
            <View>
              <Image
                source={item.image}
                style={{
                  height: 200,
                  width: width * 0.9,
                  resizeMode: 'cover',
                  borderRadius: 10,
                  backgroundColor: 'white',
                }}
              />
            </View>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            position: 'absolute',
            bottom: 10,
            marginHorizontal: '50%',
          }}
        >
          {ImageSlide.map((_, index) => (
            <View
              key={index}
              style={{
                width: activeSlide === index ? 10 : 8,
                height: activeSlide === index ? 10 : 8,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor:
                  activeSlide === index ? Colors.green75 : '#ccc',
              }}
            />
          ))}
        </View>
      </View>

      <ScrollView style={{ top: 30 }}>
        {/* Exculsive Offer */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 400 }}>Exclusive Offer</Text>
          <Text style={{ color: Colors.green75 }}>See all</Text>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10, marginBottom: 20 }}>
          <FlatList
            data={ExclusiveOffer}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  borderColor: Colors.grayE2,
                }}
                onPress={() => handleNavigate(item)}
              >
                <Image
                  source={item.image}
                  style={{ height: 150, width: 150, resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>$4.99</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.green75,
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      source={require('../../assets/images/Vector-plus.png')}
                      style={{ height: 20, width: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Best Seling */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 400 }}>Best Selling</Text>
          <Text style={{ color: Colors.green75 }}>See all</Text>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10, marginBottom: 40 }}>
          <FlatList
            data={BestSelling}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  borderColor: Colors.grayE2,
                }}
                onPress={() => handleNavigate(item)}
              >
                <Image
                  source={item.image}
                  style={{ height: 150, width: 150, resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>$4.99</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.green75,
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      source={require('../../assets/images/Vector-plus.png')}
                      style={{ height: 20, width: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
