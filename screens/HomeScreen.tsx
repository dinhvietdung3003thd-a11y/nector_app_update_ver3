import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SectionHeader from "../components/SectionHeader";
import { homeProducts } from "../data/mockData";

type Props = {
  onExplore: () => void;
  onOpenProduct: (item: any) => void;
};

export default function HomeScreen({ onExplore, onOpenProduct }: Props) {
  const exclusive = homeProducts.slice(0, 2);
  const bestSelling = homeProducts.slice(2, 4);
  const groceries = homeProducts.slice(4, 8);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={18} color="#181725" />
            <Ionicons name="wifi" size={18} color="#181725" />
            <Ionicons name="battery-full" size={22} color="#181725" />
          </View>
        </View>

        <View style={styles.locationRow}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/7016/7016537.png",
            }}
            style={styles.logo}
          />
          <View style={styles.locationWrap}>
            <Ionicons name="location-sharp" size={18} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>

        <SearchBar />

        <View style={styles.banner}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
            }}
            style={styles.bannerImage}
          />
          <View style={styles.bannerTextWrap}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSub}>Get Up To 40% OFF</Text>
            <View style={styles.dots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </View>

        <SectionHeader title="Exclusive Offer" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.rowList}>
            {exclusive.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => onOpenProduct(item)}
              />
            ))}
          </View>
        </ScrollView>

        <SectionHeader title="Best Selling" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.rowList}>
            {bestSelling.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() => onOpenProduct(item)}
              />
            ))}
          </View>
        </ScrollView>

        <SectionHeader title="Groceries" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.groceryRow}>
            {groceries.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.groceryCard}
                activeOpacity={0.85}
                onPress={() => onOpenProduct(item)}
              >
                <Image source={{ uri: item.image }} style={styles.groceryImage} />
                <View>
                  <Text style={styles.groceryTitle}>{item.title}</Text>
                  <Text style={styles.grocerySub}>{item.subtitle}</Text>
                  <Text style={styles.groceryPrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>

      <BottomTabBar active="shop" onGoHome={() => {}} onGoExplore={onExplore} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { flex: 1 },
  content: {
    paddingHorizontal: 25,
    paddingTop: 8,
    paddingBottom: 120,
  },
  statusBar: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    fontSize: 14,
    fontWeight: "600",
    color: "#181725",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationRow: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  logo: {
    width: 28,
    height: 32,
    resizeMode: "contain",
    marginBottom: 8,
  },
  locationWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4C4F4D",
  },
  banner: {
    marginTop: 20,
    height: 115,
    borderRadius: 18,
    backgroundColor: "#F2F3F2",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  bannerImage: {
    width: 130,
    height: "100%",
    resizeMode: "cover",
  },
  bannerTextWrap: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  bannerSub: {
    marginTop: 4,
    fontSize: 12,
    color: "#7C7C7C",
  },
  dots: {
    flexDirection: "row",
    gap: 6,
    marginTop: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D9D9D9",
  },
  dotActive: {
    width: 16,
    backgroundColor: "#53B175",
  },
  rowList: {
    flexDirection: "row",
    gap: 15,
  },
  groceryRow: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 10,
  },
  groceryCard: {
    width: 248,
    borderRadius: 18,
    backgroundColor: "#F8EEDF",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  groceryImage: {
    width: 72,
    height: 72,
    borderRadius: 14,
    resizeMode: "cover",
  },
  groceryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },
  grocerySub: {
    marginTop: 4,
    fontSize: 14,
    color: "#7C7C7C",
  },
  groceryPrice: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
  },
});