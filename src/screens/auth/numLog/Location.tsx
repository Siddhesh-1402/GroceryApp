import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../theme/Colors';
import AppInput from '../../../components/AppInput';
import AppButton from '../../../components/AppButton';

const Location = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      />

   
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../../assets/images/illustration.png')}
          style={styles.image}
        />
      </View>

    
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with what’s happening in your
          area
        </Text>
      </View>


      <View style={styles.form}>
        <Text style={styles.label}>Your Zone</Text>
        <AppInput />
        <View style={styles.divider} />

        <Text style={styles.label}>Your Area</Text>
        <AppInput placeholder="Types of your area" />
        <View style={styles.divider} />
      </View>

  
      <AppButton
        title="Submit"
        onPress={() => navigation.navigate('LogIn' as never)}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.whiteFF,
  },

  backBtn: {
    height: 40,
    width: 40,
    backgroundColor: Colors.green75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },

  imageWrapper: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  },

  textWrapper: {
    alignItems: 'center',
    gap: 10,
    marginBottom: '20%',
  },

  title: {
    fontSize: 25,
    fontWeight: '600',
  },

  subtitle: {
    width: '80%',
    textAlign: 'center',
    color: Colors.grey7C,
  },

  form: {
    marginBottom: 50,
  },

  label: {
    marginBottom: 6,
    color: Colors.grey7C,
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginBottom: 20,
  },
});
