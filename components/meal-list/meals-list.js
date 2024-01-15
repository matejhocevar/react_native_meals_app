import MealItem from "./meal-item";
import {FlatList, StyleSheet, View} from "react-native";

const MealsList = ({meals, onMealSelected}) => {
  function renderMealItem(itemData) {
    return <MealItem
      item={itemData.item}
      onPress={() => onMealSelected(itemData.item.id)}
    />
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

export default MealsList;