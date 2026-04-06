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
import ProductCard from "../components/ProductCard";
import { beverages } from "../data/mockData";

type Props = {
  onBack: () => void;
  onOpenProduct: (item: any) => void;
  onGoHome: () => void;
  onGoExplore: () => void;
  onGoCart: () => void;
  onGoFavourite: () => void;
  onGoAccount?: () => void;
};

export default function BeveragesScreen({
  onBack,
  onOpenProduct,
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
  onGoAccount,
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

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color="#181725" />
        </TouchableOpacity>

        <Text style={styles.title}>Beverages</Text>

        <TouchableOpacity>
          <Ionicons name="options-outline" size={22} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={beverages}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => onOpenProduct(item)} />
        )}
      />

      <BottomTabBar
        active="explore"
        onGoHome={onGoHome}
        onGoExplore={onGoExplore}
        onGoCart={onGoCart}
        onGoFavourite={onGoFavourite}
        onGoAccount={onGoAccount}
      />
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
  header: {
    paddingHorizontal: 25,
    marginTop: 12,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  listContent: {
    paddingHorizontal: 25,
    paddingBottom: 120,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});