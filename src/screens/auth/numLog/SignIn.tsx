import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../../theme/Colors';
import AppButton from '../../../components/AppButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignIn: React.FC = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/groceryImg.jpg')}
        style={[styles.bgImage, { width: width * 1.4, height: width * 1.5 }]}
      />
<Image source={require('../../../assets/images/Carrot-Orange.png')} style={styles.carrotImg}/>
      <Text style={styles.nectarText}>nectar</Text>

      <View style={[styles.bottomContainer, { height: height * 0.6 }]}>
        <Text style={styles.heading}>Get your groceries with nectar</Text>

        <TouchableOpacity
          style={styles.phoneContainer}
          onPress={() => navigation.navigate('Number')}
        >
          <Image
            source={require('../../../assets/images/flagImg.png')}
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+880</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.orText}>Or connect with social media</Text>

        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Image
              source={require('../../../assets/images/Google.png')}
              style={{
                height: 22,
                width: 22,
                position: 'absolute',
                zIndex: 1,
                left: 30,
                top: 20,
                resizeMode: 'contain',
              }}
            />
            <AppButton
              title="Continue with Google"
              onPress={() => navigation.navigate('Number')}
              backgroundColor={Colors.purpleEC}
            />
          </View>
          <View style={styles.button}>
            <Image
              source={require('../../../assets/images/Facebook.png')}
              style={{
                height: 25,
                width: 25,
                position: 'absolute',
                zIndex: 1,
                left: 30,
                top: 20,
                resizeMode: 'contain',
              }}
            />
            <AppButton
              title="Continue with Facebook"
              onPress={() => navigation.navigate('Number')}
              backgroundColor={Colors.purpleAC}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteFC,
    overflow: 'hidden',
  },

  bgImage: {
    position: 'absolute',
    top: -170,
    right: -140,
    resizeMode: 'cover',
    transform: [{ rotate: '-130deg' }],
  },

  nectarText: {
    fontSize: 20,
    position: 'absolute',
    right: 50,
    top: 50,
    transform: [{ rotate: '-130deg' }],
  },

  bottomContainer: {
    top: '45%',
    marginHorizontal: 16,
  },

  heading: {
    fontSize: 26,
    width: '60%',
    fontWeight: '600',
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },

  flag: {
    width: 28,
    height: 20,
    marginRight: 10,
  },

  countryCode: {
    fontSize: 18,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginTop: 10,
  },

  orText: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 25,
  },

  buttonWrapper: {
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
   
  },
  carrotImg:{

    fontSize: 20,
    position: 'absolute',
    right: 40,
    top: 80,
    // transform: [{ rotate: '-130deg' }],
 

  }
});
