// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const tales = [
  { id: '1', title: 'The Tortoise and the Hare' },
  { id: '2', title: 'The Three Little Pigs' },
  { id: '3', title: 'Little Red Riding Hood' },
  { id: '4', title: 'Goldilocks and the Three Bears' },
  { id: '5', title: 'Jack and the Beanstalk' },
];

const talesContent = {
  '1': {
    title: 'The Tortoise and the Hare',
    content: 'Once upon a time...',
    image: 'https://picsum.photos/200/300',
  },
  '2': {
    title: 'The Three Little Pigs',
    content: 'Once upon a time...',
    image: 'https://picsum.photos/200/300',
  },
  '3': {
    title: 'Little Red Riding Hood',
    content: 'Once upon a time...',
    image: 'https://picsum.photos/200/300',
  },
  '4': {
    title: 'Goldilocks and the Three Bears',
    content: 'Once upon a time...',
    image: 'https://picsum.photos/200/300',
  },
  '5': {
    title: 'Jack and the Beanstalk',
    content: 'Once upon a time...',
    image: 'https://picsum.photos/200/300',
  },
};

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taleContainer}
      onPress={() => navigation.navigate('Tale', { taleId: item.id })}
    >
      <Text style={styles.taleTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tales}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

function TaleScreen({ route }) {
  const { taleId } = route.params;
  const tale = talesContent[taleId];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: tale.image }} style={styles.image} />
        <Text style={styles.title}>{tale.title}</Text>
        <Text style={styles.text}>{tale.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale" component={TaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  taleContainer: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
  },
  taleTitle: {
    fontSize: 18,
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});