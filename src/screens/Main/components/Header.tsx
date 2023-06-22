import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { COLORS, icons, SIZES } from "../../../constants";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.vyyerText}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: COLORS.black,
    borderBottomRightRadius: SIZES.padding,
    borderBottomLeftRadius: SIZES.padding,
    alignItems: "center",
    paddingTop: SIZES.padding,
  },
  image: {
    width: 200,
    height: 70,
    marginTop: 6,
    tintColor: COLORS.primary,
  },
});
