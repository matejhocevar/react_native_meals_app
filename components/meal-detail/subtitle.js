import {StyleSheet, Text, View} from "react-native";

const MealDetailSubtitle = ({children}) => {
  return <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
};

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default MealDetailSubtitle;