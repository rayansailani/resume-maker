import React from "react";
import FormCollection from "./FromCollection";
import { PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";
import { useState } from "react";
import MyDocument from "../PDF/resume";

const ResumeForm = (props) => {
  const [userDetails, setUserDetails] = useState({});
  const [showResume, setShowResume] = useState(false);
  const [fileName, setFileName] = useState("resume.pdf");
  const HandleGenerateInput = (userDetails) => {
    setUserDetails(userDetails);
    setShowResume(!showResume);
    setFileName("Resume" + userDetails['name'].toString() +".pdf");
  };
  return (
    <div>
      <FormCollection onGeneratePDF={HandleGenerateInput} />
      {showResume && (
        <PDFViewer>
          <MyDocument data={userDetails} />
        </PDFViewer>
      )}
      {showResume && 
        <PDFDownloadLink
          document={<MyDocument data={userDetails} />}
          fileName={fileName}
          style={{
            textDecoration: "none",
            color: "#4a4a4a",
            backgroundColor: "grey",
            border: "1px solid #4a4a4a",
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      }
    </div>
  );
};
export default ResumeForm;
