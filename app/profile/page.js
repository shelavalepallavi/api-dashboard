"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <p>This is your profile information.</p>
    </div>
  );
};

export default Profile;
