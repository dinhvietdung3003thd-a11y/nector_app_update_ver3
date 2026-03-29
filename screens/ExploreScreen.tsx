import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import SearchBar from "../components/SearchBar";
import { exploreCategories } from "../data/mockData";

type Props = {
  onOpenCategory: (category: any) => void;
  onGoHome: () => void;
  onGoExplore: () => void;
};

export default function ExploreScreen({
  onOpenCategory,
  onGoHome,
  onGoExplore,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={18} color="#181725" />
          <Ionicons name="wifi" size={18} color="#181725" />
          <Ionicons name="battery-full" size={22} color="#181725" />
        </View>
      </View>

      <Text style={styles.title}>Find Products</Text>

      <View style={styles.searchWrap}>
        <SearchBar />
      </View>

      <FlatList
        data={exploreCategories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryCard,
              { backgroundColor: item.bg, borderColor: item.border },
            ]}
            activeOpacity={0.85}
            onPress={() => onOpenCategory(item)}
          >
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <BottomTabBar active="explore" onGoHome={onGoHome} onGoExplore={onGoExplore} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  statusBar: {
    height: 44,
    paddingHorizontal: 25,
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
  title: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  searchWrap: {
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  listContent: {
    paddingHorizontal: 25,
    paddingBottom: 120,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryCard: {
    width: "47.5%",
    minHeight: 189,
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    alignItems: "center",
  },
  categoryImage: {
    width: 110,
    height: 90,
    resizeMode: "cover",
    borderRadius: 14,
    marginBottom: 20,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    lineHeight: 22,
  },
});