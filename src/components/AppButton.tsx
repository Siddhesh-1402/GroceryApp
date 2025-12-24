import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  iconName?: string;         
  iconColor?: string;
  iconSize?: number;
  style?: ViewStyle;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  backgroundColor = Colors.green75,
  iconName,
  iconColor = Colors.whiteFF,
  iconSize = 22,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor }, style]}
   
  >
    <View style={styles.content}>
      {iconName && (
        <AntDesign
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    width: "100%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: Colors.whiteFF,
    fontSize: 16,
    fontWeight: "600",
  },
});
