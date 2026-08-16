import axiosService from "../api/axiosService";

// save resume api : called by ResumeInput component when Finish button click
export const saveResumeAPI = async (resumeDetails)=>{
    await axiosService("POST","/resumes",resumeDetails )
}
