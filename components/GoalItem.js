import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ value, onDelete, id }) => {
  return (
    <TouchableOpacity onLongPress={() => onDelete(id)} activeOpacity={0.5}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 2,
    backgroundColor: "#CCC",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
