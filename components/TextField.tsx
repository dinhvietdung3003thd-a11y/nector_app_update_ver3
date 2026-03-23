import { Feather } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";

type Props = TextInputProps & {
  label: string;
  rightIcon?: "eye" | "check";
  onRightPress?: () => void;
};

export default function TextField({
  label,
  rightIcon,
  onRightPress,
  style,
  ...props
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholderTextColor="#7C7C7C"
          style={[styles.input, style]}
          {...props}
        />
        {rightIcon ? (
          <TouchableOpacity onPress={onRightPress} activeOpacity={0.8}>
            {rightIcon === "eye" ? (
              <Feather name="eye-off" size={18} color="#7C7C7C" />
            ) : (
              <Feather name="check" size={18} color="#53B175" />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 6,
    fontWeight: "500",
  },
  inputRow: {
    width: "100%",
    height: 78,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#181725",
    paddingVertical: 0,
  },
});
