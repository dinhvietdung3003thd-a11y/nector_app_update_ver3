import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import mockData from "../data/mockData";

type Props = {
  onGoHome: () => void;
  onGoExplore: () => void;
  onGoCart?: () => void;
  onGoFavourite?: () => void;
  onGoAccount?: () => void;
};

export default function CartScreen({
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
  onGoAccount,
}: Props) {
  const data = mockData.homeProducts.slice(0, 4);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.sub}>{item.subtitle}</Text>
            </View>

            <View style={styles.qtyWrap}>
              <TouchableOpacity style={styles.qtyBtn}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyValue}>1</Text>

              <TouchableOpacity style={styles.qtyBtn}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>
              {index === 2 ? "$3.00" : index === 3 ? "$2.99" : item.price}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Go to Checkout</Text>
        <Text style={styles.totalText}>$12.96</Text>
      </TouchableOpacity>

      <BottomTabBar
        active="cart"
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
    backgroundColor: "#FDFDFD",
    paddingTop: 58,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#181725",
    marginBottom: 18,
  },
  listContent: {
    paddingHorizontal: 25,
    paddingBottom: 140,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
  },
  sub: {
    fontSize: 14,
    color: "#7C7C7C",
  },
  qtyWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 18,
    color: "#53B175",
    fontWeight: "700",
  },
  qtyValue: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
    minWidth: 54,
    textAlign: "right",
  },
  checkoutButton: {
    position: "absolute",
    left: 25,
    right: 25,
    bottom: 95,
    height: 67,
    borderRadius: 19,
    backgroundColor: "#53B175",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  totalText: {
    position: "absolute",
    right: 18,
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
    backgroundColor: "rgba(0,0,0,0.12)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
});