import MealsList from "../components/meal-list/meals-list";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

const FavoritesScreen = ({navigation}) => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const meals = MEALS.filter((m) => favoriteMealsContext.ids.includes(m.id));

  if (meals.length < 1) {
    return (
      <View style={styles.rootScreen}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  function onMealSelectedHandler(id) {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <MealsList meals={meals} onMealSelected={onMealSelectedHandler}/>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }
});

export default FavoritesScreen;