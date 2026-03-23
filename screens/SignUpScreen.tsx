import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import TextField from "../components/TextField";

type Props = {
  onBack: () => void;
  onLogin: () => void;
};

export default function SignUpScreen({ onLogin }: Props) {
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");

  return (
    <View style={styles.container}>
      <View style={styles.topLogo}>
        <Text style={styles.logo}>🥕</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        <TextField
          label="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          rightIcon="check"
        />

        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          rightIcon="eye"
        />

        <Text style={styles.terms}>
          By continuing you agree to our{" "}
          <Text style={styles.link}>Terms of Service</Text>
          {" "}and{" "}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>

        <PrimaryButton title="Sign Up" style={styles.button} />

        <Text style={styles.bottomText}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={onLogin}>
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
  terms: {
    width: "100%",
    fontSize: 14,
    lineHeight: 20,
    color: "#7C7C7C",
    marginBottom: 18,
  },
  link: {
    color: "#53B175",
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