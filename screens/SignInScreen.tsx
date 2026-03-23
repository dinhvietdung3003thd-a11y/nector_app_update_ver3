import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
  phone: string;
  onChangePhone: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
  onLogin: () => void;
  onSignup: () => void;
};

export default function SignInScreen({
  phone,
  onNext,
}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80" }}
        style={styles.topImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

        <TouchableOpacity style={styles.phoneRow} activeOpacity={0.9} onPress={onNext}>
          <Text style={styles.flag}>🇧🇩</Text>
          <Text style={styles.prefix}>{phone}</Text>
        </TouchableOpacity>

        <Text style={styles.socialText}>Or connect with social media</Text>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#5383EC" }]}>
          <AntDesign name="google" size={20} color="#fff" />
          <Text style={styles.socialBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#4A66AC" }]}>
          <FontAwesome name="facebook-f" size={20} color="#fff" />
          <Text style={styles.socialBtnText}>Continue with Facebook</Text>
        </TouchableOpacity>
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
  topImage: {
    width: "100%",
    height: 374,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 26,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    color: "#181725",
    fontWeight: "600",
    marginBottom: 24,
  },
  phoneRow: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    marginBottom: 22,
  },
  flag: {
    fontSize: 18,
    marginRight: 8,
  },
  prefix: {
    fontSize: 18,
    color: "#181725",
  },
  socialText: {
    textAlign: "center",
    color: "#828282",
    marginBottom: 22,
  },
  socialBtn: {
    width: "100%",
    height: 67,
    borderRadius: 19,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginBottom: 15,
  },
  socialBtnText: {
    color: "#fff",
    fontSize: 18,
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