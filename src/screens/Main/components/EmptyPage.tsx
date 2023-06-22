import { Image } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, icons, SIZES } from "../../../constants";

interface Props {
  title: string;
  description: string;
}

export const EmptyPage = ({ title, description }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.documents}
        style={styles.image}
        resizeMode="contain"
        alt="documents"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 6,
  },
  image: {
    width: 100,
    height: 100,
    tintColor: COLORS.primary,
    opacity: 0.7,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    marginTop: SIZES.padding,
  },
  description: { ...FONTS.body3, color: COLORS.gray, textAlign: "center" },
});
