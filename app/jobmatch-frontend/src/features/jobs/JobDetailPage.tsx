import React from 'react';
import { useLocation } from 'react-router-dom';
import type { JobData } from './JobNewPage';
import './JobNewPage.css';

const JobDetailPage: React.FC = () => {
  const { state } = useLocation();
  const job = state?.job as JobData | undefined;

  if (!job) {
    return (
      <div className="pc-layout">
        <nav className="pc-nav">
          <span className="pc-nav-logo">JobMatching</span>
          <span className="pc-nav-sep">|</span>
          <span className="pc-nav-page">案件詳細</span>
        </nav>
        <main className="pc-main">
          <div className="pc-card">
            <p style={{ color: '#999' }}>案件データが見つかりません。</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="pc-layout">
      <nav className="pc-nav">
        <span className="pc-nav-logo">JobMatching</span>
        <span className="pc-nav-sep">|</span>
        <span className="pc-nav-page">案件詳細</span>
      </nav>

      <main className="pc-main">
        <div className="pc-card">
          <div className="job-detail-body">
            <section className="detail-section">
              <h2 className="detail-heading">担当営業</h2>
              <p className="detail-value">{job.salesRep}</p>
            </section>

            <section className="detail-section">
              <h2 className="detail-heading">案件概要</h2>
              <p className="detail-value">{job.overview}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetailPage;
