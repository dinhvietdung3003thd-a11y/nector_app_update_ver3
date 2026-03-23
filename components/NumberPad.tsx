import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: (value: string) => void;
  onDelete: () => void;
};

const KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["+*#", "0", "delete"],
];

export default function NumberPad({ onPress, onDelete }: Props) {
  return (
    <View style={styles.container}>
      {KEYS.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key) => {
            if (key === "delete") {
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.key}
                  onPress={onDelete}
                  activeOpacity={0.85}
                >
                  <Feather name="delete" size={18} color="#181725" />
                </TouchableOpacity>
              );
            }

            return (
              <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => onPress(key)}
                activeOpacity={0.85}
              >
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    backgroundColor: "#F2F3F2",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  key: {
    width: "31%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontSize: 24,
    color: "#181725",
    fontWeight: "500",
  },
});