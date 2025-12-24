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


const SignIn: React.FC = ({navigation}) => {
  const { width, height } = Dimensions.get('window');
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/groceryImg.jpg')}
        style={[
          styles.bgImage,
          { width: width * 1.4, height: width * 1.4 },
        ]}
      />

    
      <Text style={styles.nectarText}>nectar</Text>

    
      <View style={[styles.bottomContainer, { height: height * 0.6 }]}>
        <Text style={styles.heading}>
          Get your groceries with nectar
        </Text>

        <TouchableOpacity style={styles.phoneContainer} onPress={()=>navigation.navigate('Number')}>
          <Image
            source={require('../../../assets/images/flagImg.png')}
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+880</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.orText}>Or connect with social media</Text>

        <View style={styles.buttonWrapper}>
          <AppButton
            title="Continue with Google"
            onPress={() => navigation.navigate('Number')}
            backgroundColor={Colors.purpleEC}
          // iconName=''
          />
          {/* <FontAwesome name="google" size={24} color="#DB4437" />
<FontAwesome name="facebook" size={24} color="#1877F2" /> */}
          <AppButton
            title="Continue with Facebook"
            onPress={() => navigation.navigate('Number')}
            backgroundColor={Colors.purpleAC}
            // iconName=''
          />
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
    top: 40,
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
  },
});
