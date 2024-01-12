import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";

const MealItem = ({item}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: "#cccccc"}}
        style={
          ({pressed}) => [
            pressed ? styles.buttonPressed : null
          ]
        }>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{uri: item.imageUrl}}
              style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
          </View>
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

export default MealItem;