import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleLoginLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ログインリンクを送信:', email);
    // ここでログインリンク送信の処理を実装
  };

  const handleGoogleLogin = () => {
    console.log('Googleログイン');
    // ここでGoogleログインの処理を実装
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 5C19 5 18 5.5 17.5 6.5L10 20C9.5 21 10 22 11 22.5C12 23 13 22.5 13.5 21.5L20 10L26.5 21.5C27 22.5 28 23 29 22.5C30 22 30.5 21 30 20L22.5 6.5C22 5.5 21 5 20 5Z"
                fill="#0f2847"
              />
              <ellipse cx="20" cy="30" rx="4" ry="5" fill="#0f2847" />
            </svg>
            <h1 className="logo-text">JobMatching</h1>
          </div>
        </div>

        <form onSubmit={handleLoginLinkSubmit} className="login-form">
          <Input
            type="email"
            label="メールアドレス"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" variant="primary" fullWidth>
            ログインリンクを送信
          </Button>

          <p className="login-note">入力したメールアドレスにログインリンクを送信します</p>
        </form>

        <div className="divider">
          <span>または</span>
        </div>

        <Button variant="google" fullWidth onClick={handleGoogleLogin}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
            />
          </svg>
          Googleでログイン
        </Button>
      </div>
    </div>
  );
};

export default Login;