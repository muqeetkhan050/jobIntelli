import React, { createContext, useContext, useState } from "react";
const JobContext = createContext();
export const JobProvider = ({ children }) => {

    const [jobs, setJobs] = useState([]);


    const addJob = (newJob) => {
        setJobs([...jobs, newJob]);
    };

    return (
        <JobContext.Provider value={{ jobs, addJob }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobs = () => {
    return useContext(JobContext);
};