import { useJobs } from "../context/JobContext";

const FinalStatus = () => {
  const { jobs } = useJobs();

  // Filter jobs with status 'offer' or 'rejected' (case-insensitive)
  const finalStatus = jobs.filter(
    (job) => {
      const status = job.status.toLowerCase();
      return status === "offer" || status === "rejected";
    }
  );

  const getStatusBadge = (status) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === 'offer') {
      return (
        <span className="badge bg-success">
          <i className="fas fa-check-circle me-1"></i>
          Offer Received
        </span>
      );
    } else if (lowerStatus === 'rejected') {
      return (
        <span className="badge bg-danger">
          <i className="fas fa-times-circle me-1"></i>
          Rejected
        </span>
      );
    }
    return (
      <span className="badge bg-secondary">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <>
      <style jsx>{`
        /* Reset any default margins/padding that might cause gaps */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .final-status-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 3rem 0;
        }
        
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .main-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          max-width: 900px;
          margin: 0 auto;
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
        }
        
        .stat-number.success {
          color: #28a745;
        }
        
        .stat-number.danger {
          color: #dc3545;
        }
        
        .stat-label {
          color: #6b7280;
          font-size: 0.9rem;
          font-weight: 500;
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
        
        .job-card.offer {
          border-left-color: #28a745;
          background: linear-gradient(135deg, #ffffff 0%, #f8fff9 100%);
        }
        
        .job-card.rejected {
          border-left-color: #dc3545;
          background: linear-gradient(135deg, #ffffff 0%, #fff8f8 100%);
        }
        
        .job-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
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
        
        .badge {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          border-radius: 25px;
          font-weight: 500;
        }
        
        .badge i {
          margin-right: 0.25rem;
        }
        
        .bg-success {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
        }
        
        .bg-danger {
          background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%) !important;
        }
        
        .bg-secondary {
          background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%) !important;
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
        
        @media (max-width: 768px) {
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
        }
      `}</style>

      <div className="final-status-container">
        <div className="content-wrapper">
          <div className="main-card fade-in">
            <div className="page-header">
              <h1 className="page-title">Final Status</h1>
            </div>
            
            {finalStatus.length > 0 ? (
              <div>
                <h2 className="page-subtitle">Your Final Job Status</h2>
                
                {/* Statistics Section */}
                <div className="stats-section">
                  <div className="stat-card">
                    <div className="stat-number success">
                      {finalStatus.filter(job => job.status.toLowerCase() === 'offer').length}
                    </div>
                    <div className="stat-label">Offers Received</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number danger">
                      {finalStatus.filter(job => job.status.toLowerCase() === 'rejected').length}
                    </div>
                    <div className="stat-label">Applications Rejected</div>
                  </div>
                </div>

                {/* Job Cards */}
                <div>
                  {finalStatus.map((job, index) => (
                    <div 
                      key={index} 
                      className={`job-card ${job.status.toLowerCase()} fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="job-header">
                        <div>
                          <h3 className="job-title">{job.jobTitle}</h3>
                          <p className="job-company">at {job.company}</p>
                        </div>
                        <div>
                          {getStatusBadge(job.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3 className="empty-title">No Final Status Jobs Found</h3>
                <p className="empty-text">You haven't received any final decisions yet.</p>
                <button className="btn btn-primary">
                  <i className="fas fa-plus me-2"></i>
                  Add New Application
                </button>
              </div>
            )}
          </div>
        </div>
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
    </>
  );
};

export default FinalStatus;