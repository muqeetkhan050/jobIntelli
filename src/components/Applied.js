import React from 'react';
import { useJobs } from '../context/JobContext';

const Applied = () => {
  const { jobs } = useJobs();
  const appliedJobs = jobs.filter(job => job.status === 'Applied');

  return (
    <>
      {appliedJobs.length > 0 ? (
        <>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              textAlign: 'center',
              margin: '30px 0 20px 0',
              color: '#1a1a1a',
              fontWeight: 'bold',
            }}
          >
            Your Job Applications
          </h2>

          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto 40px auto',
              padding: '0 15px',
            }}
          >
            {appliedJobs.map((job, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px 25px',
                  marginBottom: '20px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  fontFamily: 'Arial, sans-serif',
                  color: '#333',
                }}
              >
                <h3 style={{ margin: '0 0 8px 0' }}>
                  <strong>{job.jobTitle}</strong> at {job.company}
                </h3>
                <p style={{ margin: '5px 0' }}>
                  <em>Location:</em> {job.location || 'N/A'}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <em>Applied on:</em> {new Date(job.appliedDate).toLocaleDateString()}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <em>Status:</em> {job.status}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <em>Job Type:</em> {job.jobType}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <em>Description:</em> {job.jobDescription || 'No description provided'}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          No applied jobs found.
        </p>
      )}
    </>
  );
};

export default Applied;
