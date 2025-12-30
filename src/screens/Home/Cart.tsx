import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useCart } from '../../context/CartContext';
import { Colors } from '../../theme/Colors';

const Cart = () => {
  const { cart } = useCart();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View
        style={{
          width: '100%',
          borderBottomColor: Colors.whiteC4,
          borderBottomWidth: 1,
          height: 80,
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          My Cart
        </Text>
      </View>

      {/* <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          // <View >
          //   <Image source={item.image} />
          //   <View>
          //     <Text >{item.name}</Text>
          //     <Text>₹{item.price} × {item.quantity}</Text>
          //   </View>
          // </View>
          
        )}
      /> */}
      <View
        style={{
          height: 80,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingHorizontal: 10,
          gap: 20,

          marginBottom: 20,
        }}
      >
        <View>
          <Image
            source={require('../../assets/images/Apple.png')}
            style={{ height: 100, width: 100, resizeMode: 'contain' }}
          />
        </View>

        <View style={{ gap: 20, width: '50%' }}>
          <Text style={{ fontSize: 18, fontWeight: 600, left: 10 }}>Apple</Text>
          <View style={styles.qtyBox}>
            <TouchableOpacity>
              <Text style={styles.qtyNumber}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>1</Text>

            <TouchableOpacity>
              <Text style={styles.qtyNumber}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: 'space-between' }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/Cross.png')}
              style={{
                tintColor: Colors.greyB1,
                resizeMode: 'contain',
                left: 16,
                top: 5,
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>$499</Text>
        </View>
      </View>
      <View style={{borderWidth:1}}/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  qtyBox: {
    flexDirection: 'row',
    gap: 10,
    // justifyContent:"center",
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

  qtyPlus: {
    fontSize: 20,
    // color: Colors.green75,
  },
});
