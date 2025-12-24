import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Colors } from '../theme/Colors';

const SplashScreen = ({ navigation }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const jumpAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -25,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          friction: 3,
          tension: 120,
          useNativeDriver: true,
        }),
      ]),
    );

    jumpAnimation.start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => {
      jumpAnimation.stop();
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <Image
            source={require('../assets/images/CarrotImg.png')}
            style={styles.icon}
          />
        </Animated.View>

        <View>
          <Text style={styles.text}>nectar</Text>
          <Text style={styles.bottomText}>online groceries</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green75,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  text: {
    color: Colors.whiteFF,
    fontSize: 64,
    fontWeight: '700',
  },

  bottomText: {
    color: Colors.whiteFF,
    fontSize: 15,
    letterSpacing: 4,
    marginTop: -15,
  },
});
