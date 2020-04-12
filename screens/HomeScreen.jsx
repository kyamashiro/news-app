import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import axios from "axios";
// @ts-ignore
import { API_KEY } from "react-native-dotenv";
import Loading from "../components/Loading";
const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${API_KEY}`;

export default HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            /**
             * 記事をタップするとArticleScreenに遷移する
             * 第2引数に渡したいパラメータをセットする
             **/
            onPress={() =>
              navigation.navigate("Article", {
                article: item,
              })
            }
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 24 : 0,
    backgroundColor: "#fff",
  },
});
