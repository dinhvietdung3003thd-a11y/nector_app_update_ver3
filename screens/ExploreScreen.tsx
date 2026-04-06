import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import CategoryCard from "../components/CategoryCard";
import mockData from "../data/mockData";

type Props = {
  onBack: () => void;
  onOpenCategory: (category: any) => void;
  onOpenSearch: () => void;
  onGoHome: () => void;
  onGoExplore: () => void;
  onGoCart: () => void;
  onGoFavourite: () => void;
};

export default function ExploreScreen({
  onBack,
  onOpenCategory,
  onOpenSearch,
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={18} color="#181725" />
          <Ionicons name="wifi" size={18} color="#181725" />
          <Ionicons name="battery-full" size={18} color="#181725" />
        </View>
      </View>

      <View style={styles.headerRow}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color="#181725" />
        </TouchableOpacity>

        <Text style={styles.title}>Find Products</Text>

        <View style={{ width: 24 }} />
      </View>

      <TouchableOpacity
        style={styles.searchBar}
        activeOpacity={0.8}
        onPress={onOpenSearch}
      >
        <Ionicons name="search-outline" size={20} color="#7C7C7C" />
        <Text style={styles.searchPlaceholder}>Search Store</Text>
      </TouchableOpacity>

      <FlatList
        data={mockData.exploreCategories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategoryCard item={item} onPress={() => onOpenCategory(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <BottomTabBar
        active="explore"
        onGoHome={onGoHome}
        onGoExplore={onGoExplore}
        onGoCart={onGoCart}
        onGoFavourite={onGoFavourite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 12,
  },
  statusBar: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    color: "#181725",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  searchBar: {
    marginTop: 20,
    height: 51,
    borderRadius: 15,
    backgroundColor: "#F2F3F2",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 14,
    color: "#7C7C7C",
  },
  listContent: {
    paddingTop: 20,
    paddingBottom: 110,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});