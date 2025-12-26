import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';
import AppButton from '../../components/AppButton';

const { height, width } = Dimensions.get('window');
const Explore = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.5, elevation: 2 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 50,
            paddingHorizontal: 20,
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1,
            gap: 20,
            width: '100%',
          }}
        >
          <TouchableOpacity>
            <Image source={require('../../assets/images/Vector.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Vector-Send.png')} />
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../assets/images/Fruite1.jpg')}
          style={{
            height: height * 0.5,
            width: width * 1,
            resizeMode: 'cover',
          }}
        />
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: Colors.whiteFF,marginBottom:10}}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Orange</Text>
          <Image source={require('../../assets/images/Vector-Like.png')} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 30 }}>-</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                paddingHorizontal: 15,
                borderRadius: 15,
                textAlign: 'center',
                paddingVertical: 10,
              }}
            >
              1
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 30, color: Colors.green75 }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>$4.99</Text>
        </View>

        <View style={styles.divider} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Product Detail</Text>
          <Image source={require('../../assets/images/Vector-Down.png')} />
        </View>
        <Text
          style={{
            alignItems: 'center',
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quo nemo maiores, ex minima porro, nam ratione dignissimos provident
          accusantium, iure corrupti. Harum, sit in?
        </Text>
        <View style={styles.divider} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Nutritions</Text>
          <Image source={require('../../assets/images/Vector-Right.png')} />
        </View>
        <View style={styles.divider} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Review</Text>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Image source={require('../../assets/images/Rating.png')} />
            <Image source={require('../../assets/images/Vector-Right.png')} />
          </View>
        </View>

        <AppButton title="Add To Basket" />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
  },
});
