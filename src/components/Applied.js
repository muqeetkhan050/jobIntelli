import React from 'react';
import { useJobs } from '../context/JobContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const FinalStatus = () => {
  const { jobs } = useJobs();
  const finalStatus = jobs.filter(
    (job) => job.status.toLowerCase() === 'applied'
  );

  const getStatusBadge = (status) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === 'applied') {
      return (
        <span className="badge bg-primary fs-6 px-3 py-2">
          <i className="fas fa-paper-plane me-1"></i>
          Applied
        </span>
      );
    }
    return (
      <span className="badge bg-secondary fs-6 px-3 py-2">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
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
    <div className="container-fluid py-4">
      <style jsx>{`
        .final-status-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          padding: 2rem 0;
        }
        
        .status-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .job-card {
          transition: all 0.3s ease;
          border-radius: 15px;
          overflow: hidden;
          background: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border-left: 5px solid;
          margin-bottom: 1.5rem;
        }
        
        .job-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .job-card.applied {
          border-left-color: #007bff;
        }
        
        .company-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .job-details {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 1rem;
          margin-top: 1rem;
        }
        
        .detail-item {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }
        
        .detail-icon {
          width: 20px;
          margin-right: 10px;
          color: #6c757d;
        }
        
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        
        .stats-card {
          background: white;
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          margin-bottom: 2rem;
        }
        
        .stats-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #007bff;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .truncate-description {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>

      <div className="final-status-container">
        <div className="container">
          {finalStatus.length > 0 ? (
            <>
              {/* Header Section */}
              <div className="status-header text-center fade-in">
                <h1 className="display-4 mb-3">
                  <i className="fas fa-paper-plane me-3"></i>
                  Applied Jobs
                </h1>
                <p className="lead mb-0">
                  Your submitted job applications
                </p>
              </div>

              {/* Statistics Card */}
              <div className="row mb-4">
                <div className="col-md-6 offset-md-3">
                  <div className="stats-card">
                    <div className="stats-number">
                      {finalStatus.length}
                    </div>
                    <h5 className="text-muted">Applications Submitted</h5>
                  </div>
                </div>
              </div>

              {/* Job Cards */}
              <div className="row">
                {finalStatus.map((job, index) => (
                  <div key={index} className="col-12 col-lg-6 mb-4">
                    <div className={`job-card applied fade-in`} 
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="card-body p-4">
                        {/* Header with Company Logo and Title */}
                        <div className="d-flex align-items-center mb-3">
                          <div className="company-logo me-3">
                            {job.company ? job.company.charAt(0).toUpperCase() : 'J'}
                          </div>
                          <div className="flex-grow-1">
                            <h4 className="card-title mb-1 text-primary fw-bold">
                              {job.jobTitle}
                            </h4>
                            <h6 className="text-muted mb-0">
                              <i className="fas fa-building me-1"></i>
                              {job.company}
                            </h6>
                          </div>
                          <div>
                            {getStatusBadge(job.status)}
                          </div>
                        </div>

                        {/* Job Details */}
                        <div className="job-details">
                          <div className="detail-item">
                            <i className="fas fa-map-marker-alt detail-icon"></i>
                            <span><strong>Location:</strong> {job.location || 'Remote/Not specified'}</span>
                          </div>
                          
                          <div className="detail-item">
                            <i className="fas fa-calendar-alt detail-icon"></i>
                            <span><strong>Applied:</strong> {formatDate(job.appliedDate)}</span>
                          </div>
                          
                          <div className="detail-item">
                            <i className="fas fa-briefcase detail-icon"></i>
                            <span><strong>Type:</strong> {job.jobType || 'Full-time'}</span>
                          </div>
                          
                          {job.jobDescription && (
                            <div className="detail-item">
                              <i className="fas fa-info-circle detail-icon"></i>
                              <div className="flex-grow-1">
                                <strong>Description:</strong>
                                <p className="mb-0 mt-1 truncate-description text-muted">
                                  {job.jobDescription}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-3 d-flex gap-2">
                          <button className="btn btn-primary btn-sm">
                            <i className="fas fa-clock me-1"></i>
                            Track Progress
                          </button>
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="fas fa-eye me-1"></i>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h3 className="text-muted mb-3">No Applied Jobs Found</h3>
              <p className="text-muted mb-4">
                You haven't applied to any jobs yet. Start your job search journey!
              </p>
              <button className="btn btn-primary btn-lg">
                <i className="fas fa-plus me-2"></i>
                Add New Application
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Font Awesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
};

export default FinalStatus;