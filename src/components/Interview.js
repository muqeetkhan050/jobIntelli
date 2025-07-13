import { useJobs } from '../context/JobContext';

const Interview = () => {
  const { jobs } = useJobs();

  const interviewJobs = jobs.filter(job => job.status === 'Interview');

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
    <div className="interview-container">
      <style jsx>{`
        .interview-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 3rem 1rem;
          box-sizing: border-box;
        }
        
        .main-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f8f9fa;
        }
        
        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        
        .page-subtitle {
          color: #6b7280;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        
        .stats-section {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          min-width: 150px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #667eea;
        }
        
        .stat-label {
          color: #6b7280;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .job-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border-left: 4px solid #667eea;
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
        
        .interview-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 500;
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
        
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: #6b7280;
        }
        
        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .empty-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #374151;
        }
        
        .empty-text {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 500;
          transition: all 0.3s ease;
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
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
          .interview-container {
            padding: 2rem 0.5rem;
          }
          
          .main-card {
            padding: 1.5rem;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .stats-section {
            flex-direction: column;
            gap: 1rem;
          }
          
          .stat-card {
            min-width: auto;
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
        
        @media (max-width: 480px) {
          .interview-container {
            padding: 1.5rem 0.25rem;
          }
          
          .main-card {
            padding: 1rem;
          }
          
          .page-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="main-card fade-in">
        <div className="page-header">
          <h1 className="page-title">Interview Opportunities</h1>
        </div>
        
        {interviewJobs.length > 0 ? (
          <div>
            <h2 className="page-subtitle">Your Interview Jobs</h2>
            
            {/* Statistics Section */}
            <div className="stats-section">
              <div className="stat-card">
                <div className="stat-number pulse">
                  {interviewJobs.length}
                </div>
                <div className="stat-label">Interviews Scheduled</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {new Set(interviewJobs.map(job => job.company)).size}
                </div>
                <div className="stat-label">Companies</div>
              </div>
            </div>

            {/* Job Cards */}
            <div>
              {interviewJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="job-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="job-header">
                    <div>
                      <h3 className="job-title">{job.jobTitle}</h3>
                      <p className="job-company">at {job.company}</p>
                    </div>
                    <div className="interview-badge">
                      <i className="fas fa-calendar-check"></i>
                      Interview
                    </div>
                  </div>

                  <div className="job-details">
                    <div className="detail-item">
                      <i className="fas fa-map-marker-alt detail-icon"></i>
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{job.location || 'N/A'}</span>
                    </div>
                    
                    <div className="detail-item">
                      <i className="fas fa-calendar-alt detail-icon"></i>
                      <span className="detail-label">Applied:</span>
                      <span className="detail-value">{formatDate(job.appliedDate)}</span>
                    </div>
                    
                    <div className="detail-item">
                      <i className="fas fa-briefcase detail-icon"></i>
                      <span className="detail-label">Job Type:</span>
                      <span className="detail-value">{job.jobType || 'N/A'}</span>
                    </div>
                    
                    {job.jobDescription && (
                      <div className="detail-item">
                        <i className="fas fa-info-circle detail-icon"></i>
                        <div className="flex-grow-1">
                          <span className="detail-label">Description:</span>
                          <div className="description">
                            {job.jobDescription}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📅</div>
            <h3 className="empty-title">No Interview Jobs Found</h3>
            <p className="empty-text">You don't have any scheduled interviews at the moment.</p>
            <button className="btn-primary">
              <i className="fas fa-search"></i>
              Find Opportunities
            </button>
          </div>
        )}
      </div>

      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      {/* Font Awesome Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
};

export default Interview;