import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import {
//   Collapse,
//   CollapseHeader,
//   CollapseBody,
//   AccordionList,
// } from "accordion-collapse-react-native";
import Collapsible from "react-native-collapsible";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Collapsible collapsed={false}>
        <Text>MenuScreen</Text>
      </Collapsible>

      {/* <Collapse>
        <CollapseHeader>
          <View>
            <Text>Click here</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
      //Accordion List
      <AccordionList
        list={this.state.list}
        header={this._head}
        body={this._body}
        keyExtractor={(item) => item.key}
      /> */}
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
