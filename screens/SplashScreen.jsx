import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import logo from "../assets/logo1.png";
import s from "../styles/style";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  return (
    <View style={s.container}>
      <Image source={logo} style={style.Img} />

      <View>
        <Text style={style.dText}>Double Impact Edition</Text>
        <Text style={style.sText}>sunday school manual</Text>
        <View style={style.aView}>
          <Text style={style.aText}>&</Text>
        </View>
        <Text style={[style.sText, style.tText]}>the dayspring devotional</Text>
      </View>
      <Text style={style.volum}>vol 12</Text>
      <Text style={style.normalText}>full gospel assembly [fulga] </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const style = StyleSheet.create({
  Img: {
    width: 73,
    height: 81,
  },

  dText: {
    color: "#23BCDE",
    fontSize: 20,
    lineHeight: 50,
    textAlign: "center",
  },

  sText: {
    color: "#1E5A85",
    fontSize: 27,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "700",
    marginTop: -10,
    textShadowColor: "#1E5A85",
  },
  aText: {
    backgroundColor: "#23BCDE",
    color: "#FFFFFF",
    borderRadius: 50,
    overflow: "hidden",
    height: 30,
    width: 30,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 3,
    // right: 150,
    // top: 58,
    elevation: 2,
  },
  aView: {
    alignItems: "center",
    marginTop: -5,
    marginBottom: 5,
  },
  tText: {
    color: "#1E5A85",
    fontSize: 20,
    fontWeight: "bold",
  },
  volum: {
    color: "#1E5A85",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
    textTransform: "uppercase",
  },
  normalText: {
    marginTop: 120,
    fontSize: 22,
    textTransform: "uppercase",
    color: "#1E5A85",
  },
});
