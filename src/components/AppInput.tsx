import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';

interface AppInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: string;
  secureTextEntry?: boolean;
  autoFocus: boolean;
  style?: any;
}

const AppInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  autoFocus=false,
  style
}: AppInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType as any}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.greyB1}
        style={[{ fontSize: 16,
    color: 'black',},style]}
        autoFocus={autoFocus}
         
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
