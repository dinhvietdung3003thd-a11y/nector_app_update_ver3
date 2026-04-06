import React, { useState } from "react";
import BeveragesScreen from "../screens/BeveragesScreen";
import CartScreen from "../screens/CartScreen";
import ExploreScreen from "../screens/ExploreScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SearchScreen from "../screens/SearchScreen";

type ScreenName =
  | "home"
  | "explore"
  | "beverages"
  | "productDetail"
  | "search"
  | "filters"
  | "cart"
  | "favourite";

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
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
        />
      );

    case "explore":
      return (
        <ExploreScreen
          onBack={() => setScreen("home")}
          onOpenSearch={() => setScreen("search")}
          onOpenCategory={(category: any) => {
            const title = category?.title?.toLowerCase?.() || "";
            if (title.includes("beverage")) {
              setScreen("beverages");
            }
          }}
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
        />
      );

    case "beverages":
      return (
        <BeveragesScreen
          onBack={() => setScreen("explore")}
          onOpenProduct={(item: any) => {
            setSelectedProduct(item);
            setScreen("productDetail");
          }}
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
          onGoAccount={() => {}}
        />
      );

    case "productDetail":
      return (
        <ProductDetailScreen
          product={selectedProduct}
          onBack={() => {
            if (
              selectedProduct?.category &&
              selectedProduct.category.toLowerCase().includes("beverage")
            ) {
              setScreen("beverages");
            } else {
              setScreen("home");
            }
          }}
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
        />
      );

    case "search":
      return (
        <SearchScreen
          onBack={() => setScreen("explore")}
          onOpenFilters={() => setScreen("filters")}
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
          onGoAccount={() => {}}
        />
      );

    case "filters":
      return (
        <FilterScreen
          onBack={() => setScreen("search")}
          onApply={() => setScreen("search")}
        />
      );

    case "cart":
      return (
        <CartScreen
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
          onGoAccount={() => {}}
        />
      );

    case "favourite":
      return (
        <FavoritesScreen
          onGoHome={() => setScreen("home")}
          onGoExplore={() => setScreen("explore")}
          onGoCart={() => setScreen("cart")}
          onGoFavourite={() => setScreen("favourite")}
          onGoAccount={() => {}}
        />
      );

    default:
      return <HomeScreen onExplore={() => setScreen("explore")} onOpenProduct={() => {}} onGoCart={() => setScreen("cart")} onGoFavourite={() => setScreen("favourite")} />;
  }
}