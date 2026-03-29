import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  onSeeAll?: () => void;
};

export default function SectionHeader({ title, onSeeAll }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text style={styles.link}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#181725",
  },
  link: {
    fontSize: 16,
    fontWeight: "500",
    color: "#53B175",
  },
});