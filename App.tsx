import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

interface TimeboxProps {
  task: string;
  duration: string;
}

const Timebox = ({ task, duration }: TimeboxProps) => (
  <View style={styles.timebox}>
    <Text style={styles.timeboxText}>{task}: {duration} minutes</Text>
  </View>
);

export default function App() {
  const [task, setTask] = useState('');
  const [duration, setDuration] = useState('');
  const [timeboxes, setTimeboxes] = useState<TimeboxProps[]>([]);

  const addTimebox = () => {
    setTimeboxes([...timeboxes, { task, duration }]);
    setTask('');
    setDuration('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timeboxing App</Text>
      <TextInput
        style={styles.input}
        placeholder="Task"
        value={task}
        onChangeText={setTask}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (minutes)"
        keyboardType="number-pad"
        value={duration}
        onChangeText={setDuration}
      />
      <TouchableOpacity style={styles.button} onPress={addTimebox}>
        <Text style={styles.buttonText}>Add Timebox</Text>
      </TouchableOpacity>
      <FlatList
        data={timeboxes}
        renderItem={({ item }) => <Timebox task={item.task} duration={item.duration} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timebox: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  timeboxText: {
    fontSize: 16,
  },
});
