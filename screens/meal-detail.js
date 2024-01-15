import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {useContext, useLayoutEffect} from "react";
import MealDetails from "../components/meal-details";
import MealDetailSubtitle from "../components/meal-detail/subtitle";
import MealDetailList from "../components/meal-detail/list";
import IconButton from "../components/icon-button";
import {FavoritesContext} from "../store/context/favorites-context";

const MealDetailScreen = ({route, navigation}) => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);
  const isMealFavorite = favoriteMealsContext.ids.includes(mealId);

  function toggleFavoriteStatusHandler() {
    if (isMealFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    const mealTitle = meal.title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return <IconButton
          icon={isMealFavorite ? "star" : "star-outline"}
          color="white"
          onPress={toggleFavoriteStatusHandler}/>
      }
    });
  }, [mealId, navigation, toggleFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootScreen}>
      <Image
        source={{uri: meal.imageUrl}}
        style={styles.image}/>
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails meal={meal} textStyle={styles.detailText}/>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealDetailSubtitle>Ingredients</MealDetailSubtitle>
          <MealDetailList items={meal.ingredients}/>
          <MealDetailSubtitle>Steps</MealDetailSubtitle>
          <MealDetailList items={meal.steps}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white"
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  }
});

export default MealDetailScreen;