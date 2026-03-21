import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './features/login/Login'
import JobPage from './features/jobs/JobPage'
import JobNewPage from './features/jobs/JobNewPage'
import JobDetailPage from './features/jobs/JobDetailPage'
import type { JobData } from './features/jobs/JobNewPage'

function App() {
  const [jobs, setJobs] = useState<JobData[]>([])

  const addJob = (job: JobData) => setJobs((prev) => [job, ...prev])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/jobs" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<JobPage jobs={jobs} />} />
      <Route path="/jobs/new" element={<JobNewPage onRegister={addJob} />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />
      <Route path="*" element={<Navigate to="/jobs" replace />} />
    </Routes>
  )
}

export default App
