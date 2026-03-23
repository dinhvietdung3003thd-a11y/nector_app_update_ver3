import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import TextField from "../components/TextField";

type Props = {
  onBack: () => void;
  onSignup: () => void;
};

export default function LoginScreen({ onSignup }: Props) {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");

  return (
    <View style={styles.container}>
      <View style={styles.topLogo}>
        <Text style={styles.logo}>🥕</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subtitle}>Enter your emails and password</Text>

        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          rightIcon="eye"
        />

        <TouchableOpacity activeOpacity={0.8} style={styles.forgotWrap}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <PrimaryButton title="Log In" style={styles.button} />

        <Text style={styles.bottomText}>
          Don’t have an account?{" "}
          <Text style={styles.link} onPress={onSignup}>
            Signup
          </Text>
        </Text>
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
  topLogo: {
    alignItems: "center",
    paddingTop: 78,
  },
  logo: {
    fontSize: 42,
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 88,
  },
  title: {
    fontSize: 30,
    color: "#181725",
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 22,
  },
  forgotWrap: {
    alignItems: "flex-end",
    marginTop: -8,
    marginBottom: 24,
  },
  forgot: {
    fontSize: 14,
    color: "#181725",
    fontWeight: "400",
  },
  button: {
    marginBottom: 18,
  },
  bottomText: {
    fontSize: 14,
    color: "#181725",
    textAlign: "center",
    fontWeight: "600",
  },
  link: {
    color: "#53B175",
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