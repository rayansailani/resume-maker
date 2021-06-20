import React from "react";
import FormCollection from "./FromCollection";
import { PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";
import { useState } from "react";
import MyDocument from "../PDF/resume";
import "./resumeForm.css";

const ResumeForm = (props) => {
  const [userDetails, setUserDetails] = useState({});
  const [showResume, setShowResume] = useState(false);
  const [fileName, setFileName] = useState("resume.pdf");
  const HandleGenerateInput = (userDetails) => {
    setUserDetails(userDetails);
    setShowResume(true);
    setFileName("Resume" + userDetails['name'].toString() +".pdf");
  };
  return (
    <div className="resume-form">
      <FormCollection onGeneratePDF={HandleGenerateInput} />
      {showResume && (
        <PDFViewer className="pdfViewer">
          <MyDocument data={userDetails} />
        </PDFViewer>
      )}
      {showResume && 
        <PDFDownloadLink
          document={<MyDocument data={userDetails} />}
          fileName={fileName}
          className="grid-center"
          style={{
            textDecoration: "none",
            color: "#4a4a4a",
            backgroundColor: "white",
            fontSize:"0.8rem",
            borderRadius:"6px",
            border:"none",
            padding:"8px",
            margin:'12px',
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      }
    </div>
  );
};
export default ResumeForm;
