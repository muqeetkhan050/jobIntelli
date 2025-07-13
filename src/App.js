
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

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'offer': return '#28a745';
      case 'rejected': return '#dc3545';
      case 'interview': return '#667eea';
      case 'applied': return '#6c757d';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'offer': return 'fas fa-check-circle';
      case 'rejected': return 'fas fa-times-circle';
      case 'interview': return 'fas fa-calendar-check';
      case 'applied': return 'fas fa-paper-plane';
      default: return 'fas fa-circle';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="App">
      <style jsx>{`
        .dashboard-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding-top: 0;
        }
        
        .main-content {
          background: white;
          border-radius: 20px 20px 0 0;
          margin-top: 0;
          padding: 2rem;
          box-shadow: 0 -10px 40px rgba(0,0,0,0.1);
          min-height: calc(100vh - 4rem);
        }
        
        .dashboard-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f8f9fa;
        }
        
        .dashboard-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        
        .dashboard-subtitle {
          color: #6b7280;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        
        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .stat-number.total { color: #667eea; }
        .stat-number.applied { color: #6c757d; }
        .stat-number.interview { color: #667eea; }
        .stat-number.offer { color: #28a745; }
        .stat-number.rejected { color: #dc3545; }
        
        .stat-label {
          color: #6b7280;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .job-list-container {
          margin-top: 2rem;
        }
        
        .job-list-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .job-card {
          background: white;
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border-left: 4px solid;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .job-card:hover::before {
          transform: translateX(100%);
        }
        
        .job-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .job-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .job-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }
        
        .job-company {
          color: #6b7280;
          font-size: 1rem;
          margin: 0;
        }
        
        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .job-details {
          background: rgba(102, 126, 234, 0.05);
          border-radius: 10px;
          padding: 1rem;
          margin-top: 1rem;
        }
        
        .detail-item {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        
        .detail-item:last-child {
          margin-bottom: 0;
        }
        
        .detail-icon {
          width: 20px;
          margin-right: 10px;
          color: #667eea;
          flex-shrink: 0;
        }
        
        .detail-label {
          font-weight: 500;
          color: #374151;
          min-width: 80px;
        }
        
        .detail-value {
          color: #6b7280;
          flex: 1;
        }
        
        .description {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 0.5rem;
          border: 1px solid #e5e7eb;
        }
        
        .footer {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: 3rem;
          border-radius: 20px 20px 0 0;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @media (max-width: 768px) {
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .job-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .detail-item {
            flex-direction: column;
            gap: 0.25rem;
          }
          
          .detail-label {
            min-width: auto;
          }
        }
      `}</style>

      <div className="dashboard-container">
        <Navbar onAddJobClick={handleShowForm} />
        {showForm && (
          <AddJobForm onSubmit={handleFormSubmit} onCancel={handleCancelForm} />
        )}

        <div className="main-content fade-in">
          <div className="dashboard-header">
            <h1 className="dashboard-title cantata-one-regular">Dashboard</h1>
            <p className="dashboard-subtitle">Track your career journey and opportunities</p>
          </div>

          {jobs.length > 0 && (
            <>
              {/* Statistics Section */}
              <div className="stats-section">
                <div className="stat-card">
                  <div className="stat-number total pulse">
                    {jobs.length}
                  </div>
                  <div className="stat-label">Total Applications</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number applied">
                    {jobs.filter(job => job.status?.toLowerCase() === 'applied').length}
                  </div>
                  <div className="stat-label">Applied</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number interview">
                    {jobs.filter(job => job.status?.toLowerCase() === 'interview').length}
                  </div>
                  <div className="stat-label">Interviews</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number offer">
                    {jobs.filter(job => job.status?.toLowerCase() === 'offer').length}
                  </div>
                  <div className="stat-label">Offers</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number rejected">
                    {jobs.filter(job => job.status?.toLowerCase() === 'rejected').length}
                  </div>
                  <div className="stat-label">Rejected</div>
                </div>
              </div>

              {/* Job List */}
              <div className="job-list-container">
                <h2 className="job-list-title cantata-one-regular">
                  <i className="fas fa-briefcase"></i>
                  Your Job Applications
                </h2>
                <div className="job-list">
                  {jobs.map((job, index) => (
                    <div 
                      key={index} 
                      className="job-card fade-in"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        borderLeftColor: getStatusColor(job.status)
                      }}
                    >
                      <div className="job-header">
                        <div>
                          <h3 className="job-title">{job.jobTitle}</h3>
                          <p className="job-company">at {job.company}</p>
                        </div>
                        <div 
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(job.status) }}
                        >
                          <i className={getStatusIcon(job.status)}></i>
                          {job.status}
                        </div>
                      </div>

                      <div className="job-details">
                        <div className="detail-item">
                          <i className="fas fa-map-marker-alt detail-icon"></i>
                          <span className="detail-label">Location:</span>
                          <span className="detail-value">{job.location}</span>
                        </div>
                        
                        <div className="detail-item">
                          <i className="fas fa-calendar-alt detail-icon"></i>
                          <span className="detail-label">Applied:</span>
                          <span className="detail-value">{formatDate(job.appliedDate)}</span>
                        </div>
                        
                        <div className="detail-item">
                          <i className="fas fa-briefcase detail-icon"></i>
                          <span className="detail-label">Job Type:</span>
                          <span className="detail-value">{job.jobType}</span>
                        </div>
                        
                        <div className="detail-item">
                          <i className="fas fa-info-circle detail-icon"></i>
                          <div className="flex-grow-1">
                            <span className="detail-label">Description:</span>
                            <div className="description">
                              {job.jobDescription}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <footer className="footer">
          <p>&copy; 2023 JobIntelli. All rights reserved.</p>
        </footer>
      </div>

      {/* Font Awesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
}

export default App;