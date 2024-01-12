import CategoriesScreen from "./screens/categories";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/meals-overview";
import MealDetails from "./screens/meal-details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {backgroundColor: "#341401"},
            headerTintColor: "white",
            contentStyle: {backgroundColor: "#3f2f25"}
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories"
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetails" component={MealDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
