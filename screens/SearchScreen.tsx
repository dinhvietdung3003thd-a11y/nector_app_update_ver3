import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import mockData, { Product } from "../data/mockData";

type Props = {
  onBack: () => void;
  onOpenFilters: () => void;
  onGoHome: () => void;
  onGoExplore: () => void;
  onGoCart: () => void;
  onGoFavourite: () => void;
  onGoAccount?: () => void;
};

export default function SearchScreen({
  onBack,
  onOpenFilters,
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
  onGoAccount,
}: Props) {
  const [text, setText] = useState("Egg");

  const filtered: Product[] = mockData.searchResults.filter((product: Product) =>
    product.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.searchRow}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Search Store"
            style={styles.input}
            placeholderTextColor="#7C7C7C"
          />
        </View>

        <TouchableOpacity onPress={onOpenFilters} style={styles.filterBtn}>
          <Text style={styles.filterIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.column}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageBox}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.sub}>{item.subtitle}</Text>

            <View style={styles.bottomRow}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.plusBtn}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backText: {
    fontSize: 28,
    color: "#181725",
    marginRight: 10,
    lineHeight: 28,
  },
  searchRow: {
    flex: 1,
  },
  input: {
    height: 52,
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    paddingHorizontal: 16,
    color: "#181725",
    fontSize: 14,
  },
  filterBtn: {
    marginLeft: 10,
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    fontSize: 22,
  },
  listContent: {
    paddingBottom: 120,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 14,
  },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    backgroundColor: "#fff",
  },
  imageBox: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#181725",
    lineHeight: 20,
  },
  sub: {
    fontSize: 13,
    color: "#7C7C7C",
    marginTop: 4,
  },
  bottomRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },
  plusBtn: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 22,
  },
});