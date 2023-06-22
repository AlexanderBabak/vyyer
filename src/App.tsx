import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import FlashMessage from "react-native-flash-message";

import { theme } from "./assets/theme";
import { RootStack } from "./navigation/RootStack";

function App() {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <RootStack />
        <FlashMessage position="bottom" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
