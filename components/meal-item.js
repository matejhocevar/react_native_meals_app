import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import MealDetails from "./meal-details";

const MealItem = ({item, onPress}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: "#cccccc"}}
        style={
          ({pressed}) => [
            pressed ? styles.buttonPressed : null
          ]
        }
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{uri: item.imageUrl}}
              style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails meal={item}/>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.select({android: "hidden", ios: "visible"}),
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
});

export default MealItem;