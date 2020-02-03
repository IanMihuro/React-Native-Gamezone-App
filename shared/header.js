import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/game_bg.png")}
    >
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1
  },
  icon: {
    // position: "absolute",
    // left: 5
    //marginRight: 15
    // paddingLeft: 0,
    // paddingRight: 0,
    //marginLeft: 16
  },
  headerTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  }
});
