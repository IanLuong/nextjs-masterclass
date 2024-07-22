'use client';

import React, { useState } from 'react';

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button
        className="btn-primary"
        onClick={(e) => handleSubmit(e, email, password)}
      >
        Submit
      </button>
    </form>
  );
}
