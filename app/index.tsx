import React, { useState } from "react";
import LoginScreen from "../screens/LoginScreen";
import NumberScreen from "../screens/NumberScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SelectLocationScreen from "../screens/SelectLocationScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SplashScreen from "../screens/SplashScreen";
import VerificationScreen from "../screens/VerificationScreen";

type ScreenName =
  | "splash"
  | "onboarding"
  | "signIn"
  | "number"
  | "verification"
  | "location"
  | "login"
  | "signup";

export default function Index() {
  const [screen, setScreen] = useState<ScreenName>("splash");
  const [phone, setPhone] = useState("+880");
  const [code, setCode] = useState("");
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("Types of your area");

  switch (screen) {
    case "splash":
      return <SplashScreen onNext={() => setScreen("onboarding")} />;

    case "onboarding":
      return <OnboardingScreen onNext={() => setScreen("signIn")} />;

    case "signIn":
      return (
        <SignInScreen
          phone={phone}
          onChangePhone={setPhone}
          onBack={() => setScreen("onboarding")}
          onNext={() => setScreen("number")}
          onLogin={() => setScreen("login")}
          onSignup={() => setScreen("signup")}
        />
      );

    case "number":
      return (
        <NumberScreen
          phone={phone}
          onChangePhone={setPhone}
          onBack={() => setScreen("signIn")}
          onNext={() => setScreen("verification")}
        />
      );

    case "verification":
      return (
        <VerificationScreen
          code={code}
          onChangeCode={setCode}
          onBack={() => setScreen("number")}
          onNext={() => setScreen("location")}
        />
      );

    case "location":
      return (
        <SelectLocationScreen
          zone={zone}
          area={area}
          onChangeZone={setZone}
          onChangeArea={setArea}
          onBack={() => setScreen("verification")}
          onSubmit={() => setScreen("login")}
        />
      );

    case "login":
      return (
        <LoginScreen
          onBack={() => setScreen("location")}
          onSignup={() => setScreen("signup")}
        />
      );

    case "signup":
      return (
        <SignUpScreen
          onBack={() => setScreen("login")}
          onLogin={() => setScreen("login")}
        />
      );

    default:
      return <SplashScreen onNext={() => setScreen("onboarding")} />;
  }
}