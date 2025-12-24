import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';

interface AppInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: string;
  secureTextEntry?: boolean;
}

const AppInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}: AppInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType as any}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.grayE2}
        style={styles.input}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input: {
    fontSize: 16,
    color: 'black',

    borderBottomColor: Colors.grayE2,
  },
});
