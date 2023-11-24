import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
 
  const addTodo = (text) => {
     const newTodo = { id: Math.random().toString(), text: text };
     setTodos([...todos, newTodo]);
     setText('');
  };
 
  const deleteTodo = (id) => {
     setTodos(todos.filter((todo) => todo.id !== id));
  };
 
  return (
     <View style={styles.container}>
       <Text style={styles.title}>ToDo List</Text>
       <TextInput
         style={styles.input}
         placeholder="Enter task"
         value={text}
         onChangeText={(text) => setText(text)}
       />
       <TouchableOpacity style={styles.button} onPress={() => addTodo(text)}>
         <Text style={styles.buttonText}>Add</Text>
       </TouchableOpacity>
       <FlatList
         data={todos}
         renderItem={({ item }) => (
           <View style={styles.todoContainer}>
             <Text style={styles.todoText}>{item.text}</Text>
             <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(item.id)}>
               <Text style={styles.deleteButtonText}>X</Text>
             </TouchableOpacity>
           </View>
         )}
         keyExtractor={(item) => item.id}
       />
     </View>
  );
 };
 
 const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'white',
     paddingHorizontal: 20,
     paddingTop: 50,
  },
  title: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
  },
  input: {
     borderWidth: 1,
     borderColor: 'black',
     padding: 10,
     marginBottom: 20,
  },
  button: {
     backgroundColor: 'red',
     padding: 12,
     marginBottom: 10,
  },
  buttonText: {
     color: 'white',
     fontWeight: 'bold',
  },
  todoContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     backgroundColor: 'gray',
     padding: 10,
     marginBottom: 10,
     borderRadius: 5,
  },
  todoText: {
     fontSize: 18,
  },
  deleteButton: {
     backgroundColor: 'red',
     padding: 5,
     borderRadius: 5,
  },
  deleteButtonText: {
     color: 'white',
     fontWeight: 'bold',
  },
 });
 
 export default App;