import React, { useState, useRef } from "react";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  Platform,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Collapsible from "react-native-collapsible";
import style from "../styles/style";

export default function HomeScreen() {
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  const [isSearch, setsSearch] = useState(false);
  const [isCollapse, setIsCollapse] = useState(true);
  const [itemCollapse, setItemCollapse] = useState(null);
  const [isKey, setKeys] = useState(false);
  const flatlist1 = useRef(null);
  const getList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];

  const handleCollapse = ({ item, index }) => {
    getList.length - 1 == index ? setKeys(true) : setKeys(false);
    setItemCollapse(index);
    setIsCollapse(!isCollapse);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar style={styles.header}>
        <Appbar.Action
          icon="magnify"
          style={styles.search}
          onPress={() => console.log("Pressed label")}
        />
        <TextInput
          placeholder="Outline"
          style={styles.input}
          placeholderTextColor="#1E5A85"
          selectionColor="#80808066"
          underlineColorAndroid="#fff"
        />
        <Appbar.Action
          icon="bell-outline"
          style={styles.heardIcon}
          onPress={() => console.log("Pressed label")}
        />
      </Appbar>

      {/*  cards*/}
      <View style={{ ...styles.container, paddingBottom: 89 }}>
        <FlatList
          data={getList}
          ref={flatlist1}
          onContentSizeChange={() => {
            if (isKey) flatlist1.current.scrollToEnd();
          }}
          onLayout={() => flatlist1.current.scrollToEnd()}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              underlayColor="#efeeee"
              onPress={() => handleCollapse({ index, item })}
            >
              <View>
                <View style={styles.card}>
                  <Image
                    style={styles.cardImg}
                    source={{ uri: "https://picsum.photos/700" }}
                  />

                  <View style={styles.content}>
                    <Title>WEEK {index + 1}</Title>
                    <Paragraph style={styles.p}>January 8-14</Paragraph>
                  </View>
                </View>

                {itemCollapse == index && (
                  <Collapsible collapsed={isCollapse}>
                    <Text>Hello is {itemCollapse + " " + index}</Text>
                  </Collapsible>
                )}
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index + item}
        />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  e: {},
  search: {
    color: "#80808066",
  },
  input: {
    backgroundColor: "#fff",
    color: "#1E5A85",
    width: "80%",
    height: "230%",
    // borderRadius: 50,
    paddingHorizontal: 10,
    fontSize: 20,
    paddingRight: 25,
  },
  heardIcon: {
    backgroundColor: "#fff",
    elevation: 3,
    right: 0,
    position: "absolute",
  },
  heardText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  content: {
    left: 20,
    justifyContent: "center",
  },
  cardImg: {
    width: 109,
    height: 76,
    borderRadius: 8,
  },
  p: {
    color: "#1E5A85",
  },
  card: {
    paddingVertical: 3,
    flexDirection: "row",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
  },
  container: {
    padding: 10,
    marginTop: 90,
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 15,
    position: "absolute",
    left: 10,
    right: 10,
    top: 40,
    padding: 17,
    shadowColor: "#1E5A85",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 7,
  },
});
