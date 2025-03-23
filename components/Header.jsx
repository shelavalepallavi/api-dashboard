"use client"
import { useAppContext } from '@/app/context/SearchContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const router = useRouter();
  const [logIn, setLogIn] = useState(false)
  const { search, setSearch, toggleSidebar, theme, toggleTheme, mounted } = useAppContext();

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setLogIn(true);
      } else {
        setLogIn(false);
      router.push('/login')
      }
    }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogIn(false)
    router.push("/login");
  };

  if (!mounted) return null;
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center h-auto shadow-sm px-4 py-4 rounded-md  mb-2 bg-[var(--card-bg-color)] text-[var(--text-color)]">
    <div className="flex gap-4 items-center">
      <div className="p-2 cursor-pointer" onClick={toggleSidebar}>
        {theme === 'light' ? (
          <img src="/menu.svg" alt="menu" className="w-6 h-6" />
        ):(
          <img src="/menu-white.svg" alt="menu" className="w-6 h-6" />
        )}
      </div>
      <div className="text-xl md:text-2xl text-orange-600 font-semibold sm:block text-center cursor-pointer">
        API Dashboard
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-0 border border-gray-300 px-4 py-2 rounded-md w-full md:w-64"
      />

      <div>
        {theme === 'light' ?(
          <img src="/moon.svg" alt="" onClick={toggleTheme} className='cursor-pointer'/>
        ):(
          <img src="/sun.svg" alt="" onClick={toggleTheme} className='cursor-pointer'/>
        )}
      </div>

      {logIn ? (
        <button
          className="bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer font-bold w-full md:w-auto hover:bg-orange-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer font-bold w-full md:w-auto hover:bg-orange-500"
          onClick={() => router.push('/login')}
        >
          Login
        </button>
      )}
    </div>
  </div>
  )
}

export default Header
