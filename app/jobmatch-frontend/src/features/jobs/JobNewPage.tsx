import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './JobNewPage.css';

export interface JobData {
  id: string;
  salesRep: string;
  overview: string;
  date: string;
}

interface Props {
  onRegister: (data: JobData) => void;
}

const JobNewPage: React.FC<Props> = ({ onRegister }) => {
  const navigate = useNavigate();
  const [salesRep, setSalesRep] = useState('');
  const [overview, setOverview] = useState('');
  const [errors, setErrors] = useState<{ salesRep?: string; overview?: string }>({});
  const [showToast, setShowToast] = useState(false);

  const validate = (): boolean => {
    const newErrors: { salesRep?: string; overview?: string } = {};
    if (!salesRep.trim()) newErrors.salesRep = '担当営業は必須です';
    if (!overview.trim()) newErrors.overview = '案件概要は必須です';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const job: JobData = { id: crypto.randomUUID(), salesRep, overview, date: new Date().toLocaleDateString('ja-JP') };
    onRegister(job);
    setShowToast(true);
    setTimeout(() => {
      navigate(`/jobs/${job.id}`, { state: { job } });
    }, 2000);
  };

  return (
    <div className="pc-layout">
      {showToast && <div className="toast">登録完了</div>}

      <nav className="pc-nav">
        <span className="pc-nav-logo">JobMatching</span>
        <span className="pc-nav-sep">|</span>
        <span className="pc-nav-page">案件新規登録</span>
      </nav>

      <main className="pc-main">
        <div className="pc-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="form-label" htmlFor="salesRep">
                担当営業 <span className="required">*</span>
              </label>
              <div className="form-field">
                <input
                  id="salesRep"
                  type="text"
                  value={salesRep}
                  onChange={(e) => setSalesRep(e.target.value)}
                  className={`form-input ${errors.salesRep ? 'input-error' : ''}`}
                />
                {errors.salesRep && <span className="error-msg">{errors.salesRep}</span>}
              </div>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="overview">
                案件概要 <span className="required">*</span>
              </label>
              <div className="form-field">
                <textarea
                  id="overview"
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  className={`form-textarea ${errors.overview ? 'input-error' : ''}`}
                  rows={6}
                />
                {errors.overview && <span className="error-msg">{errors.overview}</span>}
              </div>
            </div>

            <div className="form-actions">
              <Button type="submit" variant="primary">登録</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default JobNewPage;
