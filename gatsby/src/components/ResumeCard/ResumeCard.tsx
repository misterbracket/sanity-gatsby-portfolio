import React from "react";
import { JobData } from "../../pages/resume";

export default function ResumeCard(jobData: JobData) {
  console.log(JSON.stringify(jobData));
  return (
    <div>
      <h3>{jobData.name}</h3>
    </div>
  );
}
