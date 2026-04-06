import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onBack: () => void;
  onApply: () => void;
};

export default function FilterScreen({ onBack, onApply }: Props) {
  const [categories, setCategories] = useState<string[]>(["Eggs"]);
  const [brands, setBrands] = useState<string[]>(["Cocola"]);

  const toggleItem = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const renderCheck = (checked: boolean, label: string) => (
    <Text style={[styles.optionText, checked && styles.activeText]}>
      {checked ? "✔ " : "○ "}
      {label}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.optionRow}
            onPress={() => toggleItem(item, categories, setCategories)}
          >
            {renderCheck(categories.includes(item), item)}
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Brand</Text>
        {["Individual Collection", "Cocola", "Ifad", "Kazi Farms"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.optionRow}
            onPress={() => toggleItem(item, brands, setBrands)}
          >
            {renderCheck(brands.includes(item), item)}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={onApply}>
        <Text style={styles.buttonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F2",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  close: {
    fontSize: 18,
    color: "#181725",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
    marginTop: 10,
    marginBottom: 10,
  },
  optionRow: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
    color: "#181725",
  },
  activeText: {
    color: "#53B175",
    fontWeight: "600",
  },
  button: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 30,
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});