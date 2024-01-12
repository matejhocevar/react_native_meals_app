import {FlatList, StyleSheet, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/meal-item";
import {useLayoutEffect} from "react";

const MealsOverviewScreen = ({route, navigation}) => {
  const categoryId = route.params.categoryId;

  const meals = MEALS.filter(m => m.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);


  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetail", {
        mealId: itemData.item.id,
      });
    }

    return <MealItem item={itemData.item} onPress={pressHandler}/>
  }

  return (
    <View style={styles.container}>
      <FlatList data={meals} renderItem={renderMealItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});

export default MealsOverviewScreen;