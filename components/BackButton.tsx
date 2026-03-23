import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onPress?: () => void;
};

export default function BackButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.8}>
      <Feather name="chevron-left" size={24} color="#181725" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});