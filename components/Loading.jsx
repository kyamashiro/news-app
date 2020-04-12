import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" animating={true} />
    </View>
  );
};

export default Loading;
