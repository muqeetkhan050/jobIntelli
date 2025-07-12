
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddJobForm from './components/AddJobForm';
import './App.css';
import {useJobs} from './context/JobContext'; // Import the custom hook

function App() {
  const [showForm, setShowForm] = useState(false);
  const { jobs } = useJobs(); // Get jobs from Context
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <Navbar onAddJobClick={handleShowForm} />
      {showForm && (
        <AddJobForm onSubmit={handleFormSubmit} onCancel={handleCancelForm} />
      )}

{jobs.length>0 && (
        <div className="job-list">
          <h2 className="cantata-one-regular">Your Job Applications</h2>
          <ul className="list-group">
            {jobs.map((job, index) => (
              <li key={index} className="list-group-item">
                <h5>{job.jobTitle} at {job.company}</h5>
                <p>{job.location}</p>
                <p>Applied on: {new Date(job.appliedDate).toLocaleDateString()}</p>
                <p>Status: {job.status}</p>
                <p>Job Type: {job.jobType}</p>
                <p>Description: {job.jobDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer className="text-center mt-5">
        <p>&copy; 2023 JobIntelli. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
