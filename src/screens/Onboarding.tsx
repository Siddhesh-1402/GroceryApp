import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';
import AppButton from '../components/AppButton';

const Onboarding = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/welcomeImg.jpg')}
          style={styles.img}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.textGroup}>
          <Image
            source={require('../assets/images/CarrotImg.png')}
            style={styles.icon}
          />
          <Text style={styles.bigText}>Welcome</Text>
          <Text style={styles.bigText}> to our store</Text>
          <Text style={styles.smallText}>
            Get your groceries in as fast as one hour
          </Text>
        </View>
        <AppButton
          title="Get Started"
          backgroundColor={Colors.green75}
          onPress={handleNavigate}
          style={{ width: '80%' }}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  bottom: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    alignItems: 'center',
  },

  textGroup: {
    alignItems: 'center',
    marginBottom: 20,
  },

  bigText: {
    fontSize: 48,
    color: Colors.whiteFF,
    textAlign: 'center',
  },

  smallText: {
    color: Colors.whiteFF,
    textAlign: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
