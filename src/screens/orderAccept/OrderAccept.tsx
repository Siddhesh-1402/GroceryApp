import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const OrderAccept = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/Done.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Your Order has been accepted</Text>
          <Text style={styles.subTitle}>
            Your items has been placcd and is on it’s way to being processed
          </Text>
        </View>

        <View style={styles.buttonWrapper}>
          <AppButton title="Track Order" />

          <TouchableOpacity
            onPress={() =>
              (navigation as any).navigate('Auth', {
                screen: 'Tabs',
                params: { screen: 'Shop' },
              })
            }
          >
            <Text style={styles.backText}>Back To Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderAccept;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },

  topSection: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',
    right: 10,
    top: 40,
  },

  bottomSection: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '40%',
  },

  textWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    textAlign: 'center',
    width: '70%',
    fontSize: 26,
    fontWeight: '600',
  },

  subTitle: {
    textAlign: 'center',
    width: '70%',
    color: Colors.greyB1,
    top: 10,
  },

  buttonWrapper: {
    gap: 20,
  },

  backText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
