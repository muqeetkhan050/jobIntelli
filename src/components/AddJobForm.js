import React, { useState } from "react";
import "../CSS/AddJobForm.css"; // Assuming you have a CSS file for styling

const AddJobForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    appliedDate: "",
    jobDescription: "",
    jobType: "Full-time",
    status: "Applied",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      jobTitle: "",
      company: "",
      location: "",
      appliedDate: "",
      jobDescription: "",
      jobType: "Full-time",
      status: "Applied",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Job Application</h2>
      <p className="form-subtitle">Track your job applications and stay organized</p>

      <form onSubmit={handleSubmit} className="job-form">
        <div className="row">
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g. Software Engineer"
              required
            />
          </div>
          <div className="form-group">
            <label>Company Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Tech Corp"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. San Francisco, CA"
            />
          </div>
          <div className="form-group">
            <label>Application Date</label>
            <input
              type="date"
              name="appliedDate"
              value={formData.appliedDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Job Description / Link</label>
          <input
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Job description or link to posting"
          />
        </div>

        <div className="row">
          <div className="form-group">
            <label>Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Job Application</button>
      </form>
    </div>
  );
};

export default AddJobForm;
