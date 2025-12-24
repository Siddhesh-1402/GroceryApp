import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../../theme/Colors';
import AppInput from '../../../components/AppInput';
import { useNavigation } from '@react-navigation/native';


const Verification = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TouchableOpacity
          style={styles.backBtn}
            onPress={() => navigation.goBack()}
          ></TouchableOpacity>

          <Text style={styles.title}>Enter your 4-digit code</Text>
          <Text style={styles.label}>Code</Text>

          <View style={styles.inputRow}>
            <AppInput keyboardType="number-pad" placeholder="   -   -   -   -" />
          </View>

          <View style={styles.divider} />

          <View style={styles.bottom}>
            <TouchableOpacity>
              <Text  style={styles.resendText}>
                Resend Code
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => navigation.navigate('Location'as never)}
            >
       
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Verification;

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

  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
  },

  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resendText: {
    fontSize: 16,
    color: Colors.green75,
    marginLeft: 20,
  },

  nextBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.green75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
