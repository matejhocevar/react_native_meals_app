import CategoriesScreen from "./screens/categories";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light"/>
      <CategoriesScreen/>
    </SafeAreaView>
  );
}
