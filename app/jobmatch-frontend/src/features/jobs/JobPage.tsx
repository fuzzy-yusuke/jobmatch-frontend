import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { JobData } from './JobNewPage';
import './JobPage.css';

interface Props {
  jobs: JobData[];
}

const JobPage: React.FC<Props> = ({ jobs }) => {
  const navigate = useNavigate();

  return (
    <div className="pc-layout">
      <nav className="pc-nav">
        <span className="pc-nav-logo">JobMatching</span>
        <span className="pc-nav-sep">|</span>
        <span className="pc-nav-page">案件一覧</span>
      </nav>

      <main className="pc-main">
        <div className="job-list-table-wrapper">
          <table className="job-list-table">
            <thead>
              <tr>
                <th>日付</th>
                <th>案件名</th>
                <th>担当営業</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan={3} className="job-list-empty">案件が登録されていません</td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr
                    key={job.id}
                    className="job-list-row"
                    onClick={() => navigate(`/jobs/${job.id}`, { state: { job } })}
                  >
                    <td>{job.date}</td>
                    <td>{job.overview.length > 40 ? job.overview.slice(0, 40) + '…' : job.overview}</td>
                    <td>{job.salesRep}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <button className="fab" onClick={() => navigate('/jobs/new')} aria-label="新規登録">＋</button>
    </div>
  );
};

export default JobPage;
