import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TabKey = "shop" | "explore" | "cart" | "favourite" | "account";

type Props = {
  active: TabKey;
  onGoHome?: () => void;
  onGoExplore?: () => void;
  onGoCart?: () => void;
  onGoFavourite?: () => void;
  onGoAccount?: () => void;
};

export default function BottomTabBar({
  active,
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
  onGoAccount,
}: Props) {
  const activeColor = "#53B175";
  const inactiveColor = "#181725";

  const getColor = (tab: TabKey) => (active === tab ? activeColor : inactiveColor);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.item} onPress={onGoHome}>
        <Ionicons name="storefront-outline" size={24} color={getColor("shop")} />
        <Text style={[styles.label, { color: getColor("shop") }]}>Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onGoExplore}>
        <Ionicons name="search-outline" size={24} color={getColor("explore")} />
        <Text style={[styles.label, { color: getColor("explore") }]}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onGoCart}>
        <Ionicons name="cart-outline" size={24} color={getColor("cart")} />
        <Text style={[styles.label, { color: getColor("cart") }]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onGoFavourite}>
        <Ionicons name="heart-outline" size={24} color={getColor("favourite")} />
        <Text style={[styles.label, { color: getColor("favourite") }]}>Favourite</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={onGoAccount}>
        <Ionicons name="person-outline" size={24} color={getColor("account")} />
        <Text style={[styles.label, { color: getColor("account") }]}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 12,
    shadowColor: "#555E58",
    shadowOffset: { width: 2, height: -5 },
    shadowOpacity: 0.09,
    shadowRadius: 15,
    elevation: 8,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
});