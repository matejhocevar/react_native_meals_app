import {StyleSheet, Text, View} from "react-native";

const MealDetails = ({meal, style, textStyle}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{meal.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{meal.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{meal.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
});

export default MealDetails;