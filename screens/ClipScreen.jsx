import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Platform } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";

export default ClipScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { clips } = user;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
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
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 24 : 0,
    backgroundColor: "#fff",
  },
  clip: {
    margin: 10,
    fontSize: 30,
  },
});
