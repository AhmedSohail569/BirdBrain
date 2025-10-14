/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
import AppLayout from "./containers/layouts/AppLayout";
import {StatusBarProvider} from "./components/StatusBarProvider";
import {PaperProvider} from "react-native-paper";

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBarProvider>
          <AppLayout>
            <RootNavigator />
          </AppLayout>
        </StatusBarProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
