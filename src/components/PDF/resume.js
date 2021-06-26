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
  blockView:{
    display:"block"
  }
});

// Create Document Component
const MyDocument = (props) => {
  console.log(props.data);
  return (
    <Document>
      <Page style={styles.page}>
        {props.data && (
          <View>
            <Text>Name: {props.data["name"]}</Text>
            <Text>Age: {props.data["age"]}</Text>
            <Text>Description: {props.data["desc"]}</Text>
            <Text>Skills: {props.data["skills"]}</Text>
            <Text>Courses and Certifications: {props.data["courses"]}</Text>
            <Text>Education:</Text>
             <Text style={styles.blockView}>{props.data.education ? props.data.education.map(education=>{
              return education.map(eduValues=>{
                return <Text>{eduValues.val.toString()  +" - "}</Text>

              })
            }): ""}</Text>
            {/* <Text>Projects: {
              props.data.projects ? props.data.projects.map((projects)=>{
                return projects.map(project=>{
                  return <Text>{project.val.toString() + " - "}</Text>
                })
              }): ""
            }</Text>
            <Text>Experience: {
              props.data.exp ? props.data.projects.map((exps)=>{
                return exps.map(exp=>{
                  return <Text>{exp.val.toString() + " - "}</Text>
                })
              }): ""
            }</Text> */}
          </View>
        )}
      </Page>
    </Document>
  );
};
export default MyDocument;
