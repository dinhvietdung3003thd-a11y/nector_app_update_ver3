import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import NumberPad from "../components/NumberPad";

type Props = {
  phone: string;
  onChangePhone: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
};

export default function NumberScreen({
  phone,
  onChangePhone,
  onBack,
  onNext,
}: Props) {
  const handlePress = (value: string) => {
    if (value === "+*#") return;
    onChangePhone(phone + value);
  };

  const handleDelete = () => {
    if (phone.length <= 4) return;
    onChangePhone(phone.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BackButton onPress={onBack} />

        <Text style={styles.title}>Enter your mobile number</Text>

        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputRow}>
          <Text style={styles.flag}>🇧🇩</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.nextBtn} onPress={onNext} activeOpacity={0.85}>
        <Feather name="arrow-right" size={22} color="#fff" />
      </TouchableOpacity>

      <View style={styles.padWrap}>
        <NumberPad onPress={handlePress} onDelete={handleDelete} />
      </View>

      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 52,
  },
  title: {
    fontSize: 26,
    color: "#181725",
    fontWeight: "600",
    marginTop: 28,
    marginBottom: 36,
  },
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    fontWeight: "500",
    marginBottom: 8,
  },
  inputRow: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    fontSize: 18,
    marginRight: 8,
  },
  phone: {
    fontSize: 18,
    color: "#181725",
  },
  nextBtn: {
    position: "absolute",
    right: 25,
    top: 500,
    width: 67,
    height: 67,
    borderRadius: 33.5,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  padWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    width: 135,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    zIndex: 3,
  },
});