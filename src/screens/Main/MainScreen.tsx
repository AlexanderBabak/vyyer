import { Image } from "native-base";
import React from "react";
import {
  FlatList,
  ListRenderItem,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CustomSpinner } from "../../components/CustomSpinner";
import { COLORS, FONTS, SIZES } from "../../constants";
import { useGetCards } from "../../hooks";
import { Cards } from "../../types/data";
import { EmptyPage } from "./components/EmptyPage";
import { Header } from "./components/Header";
import { TabsFilter } from "./components/TabsFilter";
import { Title } from "./components/Title";

export const MainScreen = () => {
  const { cards, loading, tabsFilter, activeTab, setActiveTab } = useGetCards();

  const renderItem: ListRenderItem<Cards> = ({ item }) => (
    <View key={item.id} style={styles.cardContainer}>
      <Image
        source={{ uri: item.image }}
        alt={`image-${item.id}`}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            Name: <Text style={styles.text}>{item.name}</Text>
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            Document: <Text style={styles.text}>{item.verdictName}</Text>
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            Time: <Text style={styles.text}>{item.time}</Text>
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0, 102, 204, 0)"
      />
      <View style={styles.mainContainer}>
        <Header />

        <Title text="Scans history" />

        <TabsFilter
          tabsFilter={tabsFilter}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {loading ? (
          <CustomSpinner />
        ) : cards.length === 0 ? (
          <EmptyPage
            title="No scans"
            description="You have no documents from this category"
          />
        ) : (
          <FlatList
            data={cards}
            style={{ marginTop: SIZES.radius }}
            contentContainerStyle={styles.container}
            renderItem={renderItem}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingHorizontal: SIZES.radius,
    gap: SIZES.base,
    paddingBottom: 30,
  },
  cardContainer: {
    alignItems: "center",
    backgroundColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
    flexDirection: "row",
    padding: SIZES.radius,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: SIZES.radius,
  },
  infoContainer: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  textContainer: { flexDirection: "row" },
  title: { ...FONTS.h4, color: COLORS.black },
  text: { ...FONTS.body4 },
});
