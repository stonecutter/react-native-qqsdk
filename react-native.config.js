module.exports = {
  project: {
    ios: {
      sharedLibraries: [
        "libz",
        "libiconv",
        "libsqlite3",
        "libstdc++",
        "Security",
        "SystemConfiguration",
        "CoreTelephony",
        "CoreGraphics"
      ]
    },
    android: {},
  },
  hooks: {
    postlink: "node node_modules/@stonecutter/react-native-qqsdk/scripts/postlink/postlink",
    postunlink: "node node_modules/@stonecutter/react-native-qqsdk/scripts/postunlink/postunlink"
  },
};