import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import PrimaryButton from "../components/PrimaryButton";

type Props = {
  zone: string;
  area: string;
  onChangeZone: (value: string) => void;
  onChangeArea: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
};

export default function SelectLocationScreen({
  zone,
  area,
  onBack,
  onSubmit,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BackButton onPress={onBack} />

        <View style={styles.illustrationWrap}>
          <Text style={styles.pin}>📍</Text>
          <View style={styles.mapBase} />
        </View>

        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.desc}>
          Switch on your location to stay in tune with what’s happening in your area
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.selectRow}>
            <Text style={styles.value}>{zone}</Text>
            <Feather name="chevron-down" size={18} color="#7C7C7C" />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Your Area</Text>
          <View style={styles.selectRow}>
            <Text style={[styles.value, { color: "#B1B1B1" }]}>{area}</Text>
            <Feather name="chevron-down" size={18} color="#7C7C7C" />
          </View>
        </View>

        <PrimaryButton title="Submit" onPress={onSubmit} style={styles.button} />
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
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 52,
  },
  illustrationWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    marginBottom: 18,
  },
  pin: {
    fontSize: 88,
    zIndex: 2,
  },
  mapBase: {
    width: 120,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
    marginTop: -18,
    transform: [{ skewX: "-25deg" }],
  },
  title: {
    fontSize: 30,
    color: "#181725",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    color: "#7C7C7C",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 8,
  },
  selectRow: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value: {
    fontSize: 18,
    color: "#181725",
  },
  button: {
    marginTop: 26,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    width: 135,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
  },
});