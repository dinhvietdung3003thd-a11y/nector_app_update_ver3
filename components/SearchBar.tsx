import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function SearchBar({
  placeholder = "Search Store",
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#7C7C7C" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#7C7C7C"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 15,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#181725",
  },
});