import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Colors } from '../../theme/Colors';
import AppButton from '../../components/AppButton';
import CheckoutScreen from '../checkout/CheckOutScreen';
import { useFav } from '../../context/FavContext';
import ErrorScreen from '../error/ErrorScreen';

const Favorites = () => {
  const { Fav, addToFav } = useFav();
  const [showFail, setShowFail] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      {Fav.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your Favorites List is empty</Text>
        </View>
      )}

      <FlatList
        data={Fav}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View>
              <Image source={item.image} style={styles.productImage} />
            </View>

            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>

            <View style={styles.rightSection}>
              <Text style={styles.priceText}>
                $ {item.price * item.quantity}
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/Vector-Right.png')}
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {Fav.length > 0 && (
        <View>
      
          <AppButton
            title="Add All To Cart"
            onPress={() => setShowFail(true)}
            style={{ marginBottom: 10 }}
          />

          <ErrorScreen
            visible={showFail}
            onClose={() => setShowFail(false)}
            onRetry={() => setShowFail(false)}
          />
        </View>
      )}
    </View>
  );
};

export default Favorites;

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
    width: '40%',
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
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  },

  deleteIcon: {
    tintColor: Colors.greyB1,
    resizeMode: 'contain',
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
