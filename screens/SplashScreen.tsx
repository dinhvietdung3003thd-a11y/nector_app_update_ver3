import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  onNext: () => void;
};

export default function SplashScreen({ onNext }: Props) {
  useEffect(() => {
    const timer = setTimeout(onNext, 1800);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Text style={styles.carrot}>🥕</Text>
        <View>
          <Text style={styles.brand}>nectar</Text>
          <Text style={styles.sub}>online groceries</Text>
        </View>
      </View>

      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  carrot: {
    fontSize: 42,
  },
  brand: {
    fontSize: 46,
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  sub: {
    fontSize: 14,
    color: "#fff",
    letterSpacing: 3,
    marginTop: -4,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 18,
    width: 135,
    height: 5,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.45)",
  },
});