import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={{ ...globalStyles.titleText, ...styles.titleText }}>
          {navigation.getParam("title")}
        </Text>
        <Text style={styles.bodyText}>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 24
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
  titleText: {
    textAlign: "center",
    marginVertical: 10
  },
  bodyText: {
    fontSize: 16
  }
});
