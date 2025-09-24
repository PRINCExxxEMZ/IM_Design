import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter a valid email.");
    } else {
      setStatus("Subscribed successfully!");
    }
  };

function Newsletter() {
  return (
          <section className="bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h4 className="text-xl font-semibold">Subscribe to Our Newsletter to Get Updated on our Latest Offers</h4>
        <p className="text-sm text-gray-500 mt-2 mb-4">Enter your email address to receive updates</p>

        <form onSubmit={subscribe} className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus(""); }}
            placeholder="Enter Email Address"
            className="w-full sm:w-auto min-w-[260px] px-4 py-2 border rounded"
          />
          <button className="px-4 py-2 bg-black text-white rounded">Subscribe</button>
        </form>

        {status && <p className="text-sm text-gray-600 mt-3">{status}</p>}
      </div>
    </section>
  );
}
}