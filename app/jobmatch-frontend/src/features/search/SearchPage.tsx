import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Button from '../../components/common/Button';
import './SearchPage.css';

export interface JobData {
  id: string;
  salesRep: string;
  overview: string;
  date: string;
}

interface Props {
  jobs: JobData[];
}

const SearchPage: React.FC<Props> = ({ jobs }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  // キーワードで案件概要・担当営業を絞り込む
  const filtered = jobs.filter((job) => {
    const q = keyword.trim().toLowerCase();
    if (!q) return true;
    return (
      job.overview.toLowerCase().includes(q) ||
      job.salesRep.toLowerCase().includes(q)
    );
  });

  return (
    <div className="pc-layout">
      <nav className="pc-nav">
        <span className="pc-nav-logo">JobMatching</span>
        <span className="pc-nav-sep">|</span>
        <span className="pc-nav-page">案件検索</span>
      </nav>

      <main className="pc-main">
        {/* 検索フォーム */}
        <div className="pc-card" style={{ marginBottom: 24 }}>
          <input
            type="text"
            className="form-input"
            placeholder="担当営業・案件概要で検索..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* 検索結果テーブル */}
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
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={3} className="job-list-empty">
                    該当する案件が見つかりません
                  </td>
                </tr>
              ) : (
                filtered.map((job) => (
                  <tr
                    key={job.id}
                    className="job-list-row"
                    onClick={() => navigate(`/jobs/${job.id}`, { state: { job } })}
                  >
                    <td>{job.date}</td>
                    <td>
                      {job.overview.length > 40
                        ? job.overview.slice(0, 40) + '…'
                        : job.overview}
                    </td>
                    <td>{job.salesRep}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
