import React from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";
import {WebView} from "react-native-webview";

export default ArticleScreen = ({route}) => {
  const {article} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}}></WebView>
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
