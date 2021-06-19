import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = (props) => {
    console.log(props.data);
    return (
        <Document>
            <Page style={styles.page}>
            {props.data ? <View>
                <Text>Name: {props.data["name"]}</Text>
                <Text>Age: {props.data["age"]}</Text>
                <Text>Description: {props.data["desc"]}</Text>

            </View>
          : " " }
            </Page>
        </Document>
    );
}
export default MyDocument;
