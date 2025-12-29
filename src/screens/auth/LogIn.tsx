import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors } from '../../theme/Colors';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/images/Group.png')}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your email and password</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <AppInput placeholder="imshuvo97@gmail.com"  autoFocus={true}/>
            <View style={styles.divider} />

            <Text style={styles.label}>Password</Text>
            <View style={styles.dropdown}>

            <AppInput secureTextEntry placeholder="••••••••" />
            <Image  source={require('../../assets/images/Vector-Eye.png')}
            style={{right:20}}/>
            </View>
            <View style={styles.divider} />

            <Text style={styles.forgot}>Forgot Password?</Text>
          </View>

          <AppButton
            title="Log In"
            onPress={() => navigation.navigate('SignUp' as never)}
          />
          <TouchableOpacity   onPress={() => navigation.navigate('SignUp' as never)}>
            <Text style={styles.footerText}>
              Don’t have an account?{' '}
              <Text style={styles.signupText}>Signup</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.whiteFF,
  },

  imageWrapper: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
  },

  subtitle: {
    color: Colors.grey7C,
    marginTop: 8,
  },

  form: {
    marginTop: '20%',
    marginBottom: 40,
  },

  label: {
    fontSize: 14,
    color: Colors.grey7C,
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginBottom: 20,
  },

  forgot: {
    textAlign: 'right',
    color: Colors.grey7C,
  },

  footerText: {
    textAlign: 'center',
    marginTop: 30,
  },

  signupText: {
    color: Colors.green75,
    fontWeight: '600',
  },
    dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
