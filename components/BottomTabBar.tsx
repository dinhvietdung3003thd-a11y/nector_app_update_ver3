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

function TabItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name={icon} size={24} color={active ? "#53B175" : "#181725"} />
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function BottomTabBar({
  active,
  onGoHome,
  onGoExplore,
  onGoCart,
  onGoFavourite,
  onGoAccount,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <TabItem
        icon="storefront-outline"
        label="Shop"
        active={active === "shop"}
        onPress={onGoHome}
      />
      <TabItem
        icon="search-outline"
        label="Explore"
        active={active === "explore"}
        onPress={onGoExplore}
      />
      <TabItem
        icon="cart-outline"
        label="Cart"
        active={active === "cart"}
        onPress={onGoCart}
      />
      <TabItem
        icon="heart-outline"
        label="Favourite"
        active={active === "favourite"}
        onPress={onGoFavourite}
      />
      <TabItem
        icon="person-outline"
        label="Account"
        active={active === "account"}
        onPress={onGoAccount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#555E58",
    shadowOffset: { width: 2, height: -5 },
    shadowOpacity: 0.09,
    shadowRadius: 15,
    elevation: 8,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#181725",
  },
  labelActive: {
    color: "#53B175",
  },
});