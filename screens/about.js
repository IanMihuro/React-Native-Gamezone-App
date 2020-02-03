import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        Welcome to GameZone a game review app built using expo and react native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
