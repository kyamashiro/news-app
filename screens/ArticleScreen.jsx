import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from "../components/ClipButton";
import Loading from "../components/Loading";

/**
 * routeはHomeScreenから渡されたパラメータ
 */
export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  // storeからuser stateを取得する
  const user = useSelector((state) => state.user);
  const { clips } = user;
  // 記事がclip済みかどうか判定する
  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };
  // 記事がクリップされていれば削除されていなければ追加する
  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  // addClipをタップしてactionを実行する
  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
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
  clip: {
    margin: 10,
    fontSize: 30,
  },
});
