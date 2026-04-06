import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Category } from "../data/mockData";

type Props = {
  item: Category;
  onPress?: () => void;
};

export default function CategoryCard({ item, onPress }: Props) {
  return (
    <Pressable
      style={[
        styles.card,
        { backgroundColor: item.bg, borderColor: item.border },
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    borderWidth: 1,
    borderRadius: 18,
    minHeight: 189,
    paddingHorizontal: 14,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 90,
    marginBottom: 18,
  },
  title: {
    textAlign: "center",
    color: "#181725",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
  },
});
