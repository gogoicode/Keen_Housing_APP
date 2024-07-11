import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View style={styles.container}>
      <Text>This is your Home page</Text>
      <StatusBar style="auto" />
      <Link href="/Rm1" style={{ color: "#A4A4A4" }}>
        Room 1
      </Link>
      <Link href="/Rm2" style={{ color: "#A4A4A4" }}>
        Room 2
      </Link>
      <Link href="/Rm3" style={{ color: "#A4A4A4" }}>
        Room 3
      </Link>
      <Link href="/Rm4" style={{ color: "#A4A4A4" }}>
        Room 4
      </Link>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2FCDFA",
  },
});
