import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import mockData, { Product } from "../data/mockData";

type Props = {
  onGoHome: () => void;
  onGoExplore: () => void;
  onGoCart?: () => void;
  onGoFavourite?: () => void;
  onGoAccount?: () => void;
};

export default function FavoritesScreen({
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
  onGoAccount,
}: Props) {
  const data: Product[] = mockData.homeProducts.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.sub}>{item.subtitle}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add All To Cart</Text>
      </TouchableOpacity>

      <BottomTabBar
        active="favourite"
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
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 20 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#181725",
    marginBottom: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
  },
  sub: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});