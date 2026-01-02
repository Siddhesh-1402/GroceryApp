import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import AppButton from '../../components/AppButton';

const ErrorScreen = ({ visible, onClose, onRetry }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          
            <Image
              source={require('../../assets/images/Cross.png')}
              style={styles.closeText}
            />
          </TouchableOpacity>

          {/* Image */}
          <Image
            source={require('../../assets/images/Failed.png')}
            style={styles.image}
          />

          {/* Text */}
          <Text style={styles.title}>Oops! Order Failed</Text>
          <Text style={styles.subtitle}>Something went tembly wrong.</Text>

          <AppButton title="Please Try Again" onPress={onRetry} />

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.backText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '68%',
  },

  closeBtn: {
    position: 'absolute',
    top: 15,
    left: 15,
  },

  closeText: {
    margin: 10,
    color: '#000',
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },



  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
  },
});
