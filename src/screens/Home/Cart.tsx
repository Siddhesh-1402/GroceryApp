import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useCart } from '../../context/CartContext';
import { Colors } from '../../theme/Colors';
import AppButton from '../../components/AppButton';
import CheckoutScreen from '../checkout/CheckOutScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const insets = useSafeAreaInsets();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top,
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.whiteFF}
        translucent
      />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {cart.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      )}

      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View>
              <Image source={item.image} style={styles.productImage} />
            </View>

            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>

              <View style={styles.qtyBox}>
                <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                  <Text style={styles.qtyNumber}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => increaseQty(item.id)}>
                  <Text style={styles.qtyNumber}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rightSection}>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Image
                  source={require('../../assets/images/Cross.png')}
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>

              <Text style={styles.priceText}>
                $ {item.price * item.quantity}
              </Text>
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View>
          <View style={styles.totalBadge}>
            <Text style={styles.totalText}>$ {totalPrice}</Text>
          </View>

          <AppButton
            title="Go to CheckoOut"
            onPress={() => setShowCheckout(true)}
            style={{ marginBottom: 10 }}
          />

          <CheckoutScreen
            visible={showCheckout}
            onClose={() => setShowCheckout(false)}
            total={totalPrice}
          />
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },

  header: {
    width: '100%',
    borderBottomColor: Colors.whiteC4,
    borderBottomWidth: 1,
    height: 80,
    justifyContent: 'center',
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: '50%',
  },

  emptyText: {
    fontSize: 20,
    color: '#999',
    fontWeight: '600',
  },

  cartItem: {
    height: 110,
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    width: '94%',
    alignItems: 'center',
    borderColor: Colors.greyB1,
    marginHorizontal: 'auto',
  },

  productImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },

  itemInfo: {
    gap: 20,
    width: '50%',
  },

  itemName: {
    fontSize: 18,
    fontWeight: '600',
    left: 10,
  },

  qtyBox: {
    flexDirection: 'row',
    gap: 10,
  },

  qtyText: {
    fontSize: 20,
  },

  qtyNumber: {
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: Colors.green75,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: Colors.greyB1,
  },

  rightSection: {
    justifyContent: 'space-between',
    gap: 30,
  },

  deleteIcon: {
    tintColor: Colors.greyB1,
    resizeMode: 'contain',
    left: 16,
  },

  priceText: {
    fontSize: 16,
    fontWeight: '600',
  },

  totalBadge: {
    position: 'absolute',
    zIndex: 1,
    right: 30,
    top: 18,
    backgroundColor: '#489E67',
    padding: 5,
    borderRadius: 10,
  },

  totalText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
});
