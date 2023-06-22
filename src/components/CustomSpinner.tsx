import { Spinner } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../constants";

export const CustomSpinner = () => {
  return (
    <View style={styles.container}>
      <Spinner color={COLORS.black} size="lg" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
