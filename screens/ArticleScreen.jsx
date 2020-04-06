import React from "react";
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from "react-native";
import {WebView} from "react-native-webview";
import {useDispatch} from "react-redux";
import {addClip, deleteClip} from "../store/actions/user";

export default ArticleScreen = ({route}) => {
  const {article} = route.params;
  const dispatch = useDispatch();
  // addClipをタップしてactionを実行する
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({clip: article}));
        }}
      >
        <Text>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({clip: article}));
        }}
      >
        <Text>DELETE_CLIP</Text>
      </TouchableOpacity>
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
  clip: {
    margin: 10,
    fontSize: 30,
  },
});
