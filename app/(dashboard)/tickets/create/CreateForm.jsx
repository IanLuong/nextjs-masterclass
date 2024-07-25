'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [data, setData] = useState({
    title: '',
    body: '',
    priority: 'low',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch('http://localhost:3000/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    console.log("🚀 ~ handleSubmit ~ json:", json)

    if (json.error) {
      console.log(error.message);
    }
    if (json.data) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          value={data.title}
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          required
          onChange={(e) =>
            setData((prev) => ({ ...prev, body: e.target.value }))
          }
          value={data.body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={(e) =>
            setData((prev) => ({ ...prev, priority: e.target.value }))
          }
          value={data.priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
