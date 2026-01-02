import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Colors } from '../../theme/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AccountScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View  style={[
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
      {/* Header */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/Profile.jpg')}
          style={styles.avatar}
        />
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={styles.name}>Afsar Hossen</Text>
            <Image
              source={require('../../assets/images/edit.png')}
              style={{ width: 18, height: 18,resizeMode: 'contain' }}
            />
          </View>
          <Text style={styles.email}>Imshuvo97@gmail.com</Text>
        </View>
      </View>

      {/* Menu List */}
      <ScrollView>
        {menuItem('Orders', require('../../assets/images/OrdersIcon.png'))}
        {menuItem(
          'My Details',
          require('../../assets/images/MyDetailsIcon.png'),
        )}
        {menuItem(
          'Delivery Address',
          require('../../assets/images/location.png'),
        )}
        {menuItem(
          'Payment Methods',
          require('../../assets/images/Payment.png'),
        )}
        {menuItem('Promo Cord', require('../../assets/images/PromoIcon.png'))}
        {menuItem('Notifications', require('../../assets/images/BellIcon.png'))}
        {menuItem('Help', require('../../assets/images/helpIcon.png'))}
        {menuItem('About', require('../../assets/images/aboutIcon.png'))}

        {/* Logout */}
        <View style={styles.logoutBox}>
          <TouchableOpacity style={styles.logoutBtn}>
            <Image
              source={require('../../assets/images/LogOut.png')}
              style={{ width: 22, height: 22, resizeMode: 'contain', left: 10 }}
            />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const menuItem = (title: string, icon: any) => (
  <TouchableOpacity style={styles.item}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
      <Image
        source={icon}
        style={{ width: 22, height: 22, resizeMode: 'contain' }}
      />
      <Text style={styles.itemText}>{title}</Text>
    </View>
    <Image
      source={require('../../assets/images/Vector-Right.png')}
      style={{ width: 18, height: 18, resizeMode: 'contain' }}
    />
  </TouchableOpacity>
);

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 15,
    borderBottomWidth: 1,
    paddingBottom: 40,
    borderColor:"#eee"
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    resizeMode: 'contain'
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
  },

  email: {
    fontSize: 14,
    color: '#888',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },

  logoutBox: {
    marginTop: 30,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },

  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logoutText: {
    fontSize: 18,
    color: Colors.green75,
    fontWeight: '600',
    marginHorizontal: 110,
  },
});
