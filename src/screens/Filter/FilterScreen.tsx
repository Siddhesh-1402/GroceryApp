import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

const FilterScreen = ({ visible, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState(['Eggs']);
  const [selectedBrands, setSelectedBrands] = useState(['Cocola']);

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const CheckBox = ({ label, checked, onPress }) => (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checkedBox]}>
        {checked && (
          <Image
            source={require('../../assets/images/Exclude.png')}
            style={styles.checkIcon}
          />
        )}
      </View>
      <Text style={[styles.label, checked && styles.labelChecked]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal isVisible={visible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Image
              source={require('../../assets/images/Cross.png')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Filters</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Categories</Text>

          {['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'].map(
            item => (
              <CheckBox
                key={item}
                label={item}
                checked={selectedCategories.includes(item)}
                onPress={() =>
                  toggleItem(item, selectedCategories, setSelectedCategories)
                }
              />
            ),
          )}

          <Text style={styles.sectionTitle}>Brand</Text>

          {['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'].map(
            item => (
              <CheckBox
                key={item}
                label={item}
                checked={selectedBrands.includes(item)}
                onPress={() =>
                  toggleItem(item, selectedBrands, setSelectedBrands)
                }
              />
            ),
          )}
        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FilterScreen;


const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '90%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  closeIcon: {
    width: 20,
    height: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    width: '90%',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  checkedBox: {
    backgroundColor: '#53B175',
    borderColor: '#53B175',
  },

  checkIcon: {
    width: 12,
    height: 12,
    tintColor: '#fff',
  },

  label: {
    fontSize: 16,
    color: '#000',
  },

  labelChecked: {
    color: '#53B175',
  },

  button: {
    backgroundColor: '#53B175',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
