import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  item: {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    image: string;
  };
  onPress?: () => void;
};

export default function ProductCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 173,
    minHeight: 248,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 95,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    minHeight: 44,
  },
  subtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 4,
    marginBottom: 20,
  },
  bottomRow: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },
  addBtn: {
    width: 45,
    height: 45,
    borderRadius: 17,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
});