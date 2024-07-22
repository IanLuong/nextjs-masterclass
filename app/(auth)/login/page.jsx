'use client';

import React from 'react';
import AuthForm from '../AuthForm';

export default function Login() {
  function handleSubmit(e, email, password) {
    e.preventDefault();
    console.log('🚀 ~ handleSubmit ~ email, password:', email, password);
  }

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
