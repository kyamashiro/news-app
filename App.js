import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import axios from "axios";
// @ts-ignore
import { API_KEY } from "react-native-dotenv";
const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${API_KEY}`;

export default function App() {
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
  },
});
