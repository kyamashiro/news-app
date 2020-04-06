import React from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";

export default ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ClipScreen</Text>
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
