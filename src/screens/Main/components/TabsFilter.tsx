import React, { Dispatch, SetStateAction } from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

interface TabsProps {
  tabsFilter: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const TabsFilter = ({
  tabsFilter,
  activeTab,
  setActiveTab,
}: TabsProps) => {
  const renderItem: ListRenderItem<string> = ({ item, index }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginTop: SIZES.radius,
        marginLeft: index === 0 ? SIZES.radius : SIZES.base,
        marginRight: index === tabsFilter.length - 1 ? SIZES.radius : 0,
        backgroundColor: activeTab === item ? COLORS.black : COLORS.white,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        borderWidth: 2,
        borderColor: activeTab === item ? COLORS.black : COLORS.primary,
      }}
      onPress={() => setActiveTab(item)}
    >
      <Text
        style={{
          color: activeTab === item ? COLORS.primary : COLORS.black,
          alignSelf: "center",
          ...FONTS.h3,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={tabsFilter}
        horizontal
        keyExtractor={item => `${item}`}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};
