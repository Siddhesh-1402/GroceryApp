import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/Colors';

const SignUp = () => {
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

          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Enter your credentials to continue
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <AppInput placeholder="Afsar Hossen Shuvo" autoFocus={true} />
            <View style={styles.divider} />

            <Text style={styles.label}>Email</Text>
            <AppInput placeholder="imshuvo97@gmail.com"  autoFocus={true}/>
            <View style={styles.divider} />

            <Text style={styles.label}>Password</Text>
            <View style={styles.dropdown}>

            <AppInput secureTextEntry placeholder="••••••••"  autoFocus={true}/>
            <Image  source={require('../../assets/images/Vector-Eye.png')}
            style={{right:20}}/>
            </View>
            <View style={styles.divider} />

            <Text style={styles.term}>
              By continuing you agree to our{' '}
              <Text style={styles.signupText}> Terms of Service </Text>
              and <Text style={styles.signupText}>Privacy Policy</Text>.
            </Text>
          </View>

          <AppButton
            title="Sign Up"
            onPress={() => navigation.navigate('DrawerNavigator' as never)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('LogIn' as never)}
          >
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.signupText}>Signup</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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
    marginTop: '10%',
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

  term: {
    fontSize: 14,
    color: Colors.grey7C,

    lineHeight: 24,
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
