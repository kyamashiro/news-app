import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
// @ts-ignore
import dummyArticles from "./dummies/articles";
// @ts-ignore
import { API_KEY } from "react-native-dotenv";

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // mount時に呼び出される
    // alert("called!");
    alert(API_KEY);
    // 2秒後にdummyデータが渡される
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    // アンマウント時にcleanupが実行される
    return () => clearTimeout(timer);
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
