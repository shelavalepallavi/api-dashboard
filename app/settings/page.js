"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Settings = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Settings Page</h1>
      <p>Here you can manage your settings.</p>
    </div>
  );
};

export default Settings;
