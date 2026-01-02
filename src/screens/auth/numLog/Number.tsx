import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StatusBar,
} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import { Colors } from '../../../theme/Colors';
import AppInput from '../../../components/AppInput';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Number = () => {
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(false);
  const [dialCode, setDialCode] = useState('+880');
  const [flag, setFlag] = useState('🇧🇩');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            {
              paddingTop: insets.top,
            },
          ]}
        >
          <StatusBar barStyle="dark-content" backgroundColor={Colors.whiteFF} translucent />
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Image source={require('../../../assets/images/Vector.png')} />
          </TouchableOpacity>

          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.label}>Mobile Number</Text>

          <View style={styles.inputRow}>
            <TouchableOpacity
              style={styles.countryBox}
              onPress={() => setShow(true)}
            >
              <Text style={styles.flag}>{flag}</Text>
              <Text style={styles.code}>{dialCode}</Text>
            </TouchableOpacity>

            <AppInput keyboardType="number-pad" autoFocus={true} />
          </View>

          <View style={styles.divider} />

          <CountryPicker
            show={show}
            lang="en"
            pickerButtonOnPress={item => {
              setDialCode(item.dial_code);
              setFlag(item.flag);
              setShow(false);
            }}
            onBackdropPress={() => setShow(false)}
          />

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate('Verification' as never)}
          >
            <Image source={require('../../../assets/images/Frame.png')} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Number;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.whiteFF,
  },

  backBtn: {
    height: 40,
    width: 40,
    // backgroundColor: Colors.green75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 40,
  },

  label: {
    marginTop: 30,
    fontSize: 14,
    color: '#888',
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  countryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  flag: {
    fontSize: 22,
    marginRight: 6,
  },

  code: {
    fontSize: 16,
    marginRight: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
  },

  nextBtn: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.green75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
