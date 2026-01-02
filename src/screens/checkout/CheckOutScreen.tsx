import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors } from '../../theme/Colors';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = ({ visible, onClose, total }) => {
  const navigation = useNavigation();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require('../../assets/images/Cross.png')}
                style={styles.close}
              />
            </TouchableOpacity>
          </View>

          {/* Options */}
          <View style={styles.row}>
            <Text style={styles.label}>Delivery</Text>

            <View style={styles.rowRight}>
              <Text style={styles.value}>Select Method</Text>
              <Image source={require('../../assets/images/Vector-Right.png')} />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Payment</Text>

            <View style={styles.rowRight}>
              <Image source={require('../../assets/images/card.png')} />
              <Image source={require('../../assets/images/Vector-Right.png')} />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Promo Code</Text>
            <View style={styles.rowRight}>
              <Text style={styles.value}>Pick discount</Text>
              <Image source={require('../../assets/images/Vector-Right.png')} />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Cost</Text>

            <View style={styles.rowRight}>
              <Text style={styles.total}>${total.toFixed(2)}</Text>
              <Image source={require('../../assets/images/Vector-Right.png')} />
            </View>
          </View>

          <Text style={styles.terms}>
            By placing an order you agree to our{' '}
            <Text style={styles.link}>Terms</Text> And{' '}
            <Text style={styles.link}>Conditions</Text>
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('orderAccept' as never)}
          >
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: '65%',
    gap: 20,
  
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
  },

  close: {
    fontSize: 24,
    color: '#333',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  rowRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  label: {
    fontSize: 16,
    color: '#888',
  },

  value: {
    fontSize: 16,
    fontWeight: '500',
  },

  total: {
    fontSize: 18,
    fontWeight: '700',
  },

  terms: {
    fontSize: 13,
    color: '#999',
    marginVertical: 15,
    width: '60%',
  },

  link: {
    color: '#000',
    fontWeight: '600',
  },

  button: {
    backgroundColor: Colors.green75,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
