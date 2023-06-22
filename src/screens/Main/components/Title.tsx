import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

interface Props {
  text: string;
}
export const Title = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.radius,
    marginTop: SIZES.radius,
  },
  text: {
    ...FONTS.h2,
    color: COLORS.black,
  },
});
