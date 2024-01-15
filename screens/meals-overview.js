import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../components/meal-list/meals-list";

const MealsOverviewScreen = ({route, navigation}) => {
  const categoryId = route.params.categoryId;

  const meals = MEALS.filter(m => m.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);


  function onMealSelectedHandler(id) {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <MealsList meals={meals} onMealSelected={onMealSelectedHandler}/>
  );
}

export default MealsOverviewScreen;