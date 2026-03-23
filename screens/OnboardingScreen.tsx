import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

type Props = {
  onNext: () => void;
};

export default function OnboardingScreen({ onNext }: Props) {
  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" }}
      style={styles.container}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />

      <View style={styles.bottomContent}>
        <Text style={styles.logo}>🥕</Text>
        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        <Text style={styles.desc}>
          Ger your groceries in as fast as one hour
        </Text>

        <PrimaryButton title="Get Started" onPress={onNext} style={styles.button} />
      </View>

      <View style={styles.homeIndicator} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.28)",
  },
  bottomContent: {
    paddingHorizontal: 30,
    paddingBottom: 70,
    alignItems: "center",
  },
  logo: {
    fontSize: 34,
    marginBottom: 8,
  },
  title: {
    fontSize: 42,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 48,
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    color: "#FCFCFC",
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    width: "100%",
  },
  homeIndicator: {
    position: "absolute",
    bottom: 12,
    alignSelf: "center",
    width: 135,
    height: 5,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
});