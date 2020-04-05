module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo", "module:react-native-dotenv"],
  };
};
