import { Spinner, Text } from "native-base";
import React from "react";
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

type Props = {
  children: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  isLoading?: boolean;
};

const TextButton: React.FC<Props> = ({
  children,
  onPress,
  containerStyle,
  labelStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        opacity: isLoading ? 0.4 : undefined,
        ...containerStyle,
      }}
    >
      {isLoading && <Spinner color={COLORS.primary} mr={3} size="sm" />}
      <Text style={{ color: COLORS.primary, ...FONTS.h2, ...labelStyle }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
