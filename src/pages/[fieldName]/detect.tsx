import React, { useState } from "react";
import FileUpload from "@/components/design-system/FileUpload";
import { handleRobotDiseaseDetection } from "../api/robotDiseaseDetection";
import { Button, Chip, CircularProgress } from "@mui/material";

const Detect = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const doDiseaseDetection = async () => {
    if (selectedFile == null) {
      return;
    }
    setLoading(true);
    const resp = await handleRobotDiseaseDetection(selectedFile);
    setLoading(false);
    setDiagnosis(resp);
  };

  return (
    <div className="p-10 flex-col gap-10 items-center justify-center justify-items-center">
      <div className="flex flex-col gap-10 justify-center items-center mt-5">
        <div className="flex flex-col gap-1 items-center">
          <div className="flex gap-2 items-center">
            <h2 className="text-3xl self-center">Disease detection </h2>
            <Chip label="beta" color="primary" size="small" />
          </div>
          <div>
            Upload a picture of a grape leaf from your vineyard, and we will
            diagnose it.
          </div>
        </div>
        <FileUpload
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <Button
          disabled={selectedFile == null}
          onClick={() => doDiseaseDetection()}
        >
          Submit
        </Button>
      </div>
      {loading ? (
        <div className="flex justify-center mt-10">
          <CircularProgress />
        </div>
      ) : (
        <div className="whitespace-break-spaces mt-10">
          {diagnosis != null ? diagnosis : ""}
        </div>
      )}
    </div>
  );
};

export default Detect;
