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

type Props = {
  item: {
    title: string;
    subtitle: string;
    price: string;
    image: string;
  };
  onBack: () => void;
};

export default function ProductDetailScreen({ item, onBack }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={18} color="#181725" />
            <Ionicons name="wifi" size={18} color="#181725" />
            <Ionicons name="battery-full" size={22} color="#181725" />
          </View>
        </View>

        <View style={styles.imageWrap}>
          <TouchableOpacity style={styles.backBtn} onPress={onBack}>
            <Ionicons name="chevron-back" size={24} color="#181725" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareBtn}>
            <Ionicons name="share-outline" size={22} color="#181725" />
          </TouchableOpacity>

          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.sub}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="#7C7C7C" />
            </TouchableOpacity>
          </View>

          <View style={styles.qtyRow}>
            <View style={styles.qtyBox}>
              <TouchableOpacity>
                <Ionicons name="remove" size={20} color="#B3B3B3" />
              </TouchableOpacity>
              <View style={styles.countBox}>
                <Text style={styles.count}>1</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="add" size={20} color="#53B175" />
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>{item.price}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionRow}>
              <Text style={styles.sectionTitle}>Product Detail</Text>
              <Ionicons name="chevron-down" size={20} color="#181725" />
            </View>
            <Text style={styles.desc}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss.
              Apples May Be Good For Your Heart. As Part Of A Healthy And
              Varied Diet.
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionRow}>
              <Text style={styles.sectionTitle}>Nutritions</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>100gr</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionRow}>
              <Text style={styles.sectionTitle}>Review</Text>
              <View style={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Ionicons key={index} name="star" size={18} color="#F3603F" />
                ))}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  statusBar: {
    height: 44,
    paddingHorizontal: 25,
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
  imageWrap: {
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 12,
    paddingHorizontal: 25,
    paddingBottom: 18,
  },
  backBtn: {
    position: "absolute",
    left: 20,
    top: 14,
    zIndex: 2,
  },
  shareBtn: {
    position: "absolute",
    right: 20,
    top: 14,
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "contain",
    marginTop: 20,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
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
  content: {
    paddingHorizontal: 25,
    paddingTop: 24,
    paddingBottom: 30,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#181725",
  },
  sub: {
    marginTop: 4,
    fontSize: 16,
    color: "#7C7C7C",
  },
  qtyRow: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  countBox: {
    width: 46,
    height: 46,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#181725",
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
    paddingVertical: 18,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
  },
  desc: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 20,
    color: "#7C7C7C",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: "#EBEBEB",
  },
  badgeText: {
    fontSize: 9,
    color: "#7C7C7C",
  },
  stars: {
    flexDirection: "row",
    gap: 2,
  },
  button: {
    height: 67,
    borderRadius: 19,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});