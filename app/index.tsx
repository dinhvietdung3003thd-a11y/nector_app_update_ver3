import React, { useState } from "react";
import BeveragesScreen from "../screens/BeveragesScreen";
import ExploreScreen from "../screens/ExploreScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

type ScreenName = "home" | "productDetail" | "explore" | "beverages";

export default function Index() {
  const [screen, setScreen] = useState<ScreenName>("home");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  switch (screen) {
    case "home":
      return (
        <HomeScreen
          onExplore={() => setScreen("explore")}
          onOpenProduct={(item: any) => {
            setSelectedProduct(item);
            setScreen("productDetail");
          }}
        />
      );

    case "productDetail":
      return (
        <ProductDetailScreen
          item={
            selectedProduct || {
              title: "Naturel Red Apple",
              subtitle: "1kg, Price",
              price: "$4.99",
              image:
                "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop",
            }
          }
          onBack={() => setScreen("home")}
        />
      );

    case "explore":
      return (
        <ExploreScreen
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onOpenCategory={(category: any) => {
            if (category.title.toLowerCase().includes("beverages")) {
              setScreen("beverages");
            }
          }}
        />
      );

    case "beverages":
      return (
        <BeveragesScreen
          onBack={() => setScreen("explore")}
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onOpenProduct={(item: any) => {
            setSelectedProduct(item);
            setScreen("productDetail");
          }}
        />
      );

    default:
      return null;
  }
}