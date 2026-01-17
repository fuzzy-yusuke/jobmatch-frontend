import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './Login.css';

const JobPage: React.FC = () => {
  const [jobname, setJobname] = useState('');
  const [overview, setOverview] = useState('');
  const [skillset, setSkillset] = useState('');
  const [place, setPlace] = useState('');

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('案件を登録:');
    // ここで案件登録の処理を実装
  };

  return (
    <div className="content">
        <div className="logo">
            <h1 className="logo-text">JobMatching</h1>
        </div>


        <form onSubmit={handleJobSubmit} className="login-form">
          <Input
            type="text"
            label="案件名"
            value={jobname}
            onChange={(e) => setJobname(e.target.value)}
          />

          <Input
            type="text"
            label="概要"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />

          <Input
            type="text"
            label="スキルセット"
            value={skillset}
            onChange={(e) => setSkillset(e.target.value)}
          />

          <Input
            type="text"
            label="場所"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />

          <Button type="submit" variant="primary" fullWidth>
            登録
          </Button>
        </form>
    </div>
  );
};

export default JobPage;