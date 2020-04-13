import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { id: (Math.random() * 1000).toFixed(0).toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const showModalAddHandler = () => setIsAddMode(true);

  const cancelModalAddHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={showModalAddHandler} />
      <View>
        <GoalInput
          onAddGoal={addGoalHandler}
          isAddMode={isAddMode}
          onCancel={cancelModalAddHandler}
        />
      </View>
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            value={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
