import React from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { COLORS } from "../constants";

interface Props {
  containerStyle?: ViewStyle;
  icon: ImageSourcePropType;
  iconStyle?: ImageStyle;
  onPress: () => void;
}

const IconButton = ({ containerStyle, icon, iconStyle, onPress }: Props) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        style={{ width: 30, height: 30, tintColor: COLORS.white, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default IconButton;
