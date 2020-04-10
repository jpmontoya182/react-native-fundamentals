import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextInput placeholder="Course Goal" style={styles.addNewGoal} />
        <Button title="Add"></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  addNewGoal: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 10,
    width: "80%",
  },
});
