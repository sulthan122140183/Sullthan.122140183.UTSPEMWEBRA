import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Pastikan path ini benar

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Email dan password wajib diisi.');
      return;
    }
    const success = login(email, password); // Asumsi login() mengembalikan boolean
    if (success) {
      navigate('/'); // Navigasi ke halaman utama setelah login berhasil
    } else {
      alert('Email atau password salah.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Kolom Kiri (Dekoratif) */}
      <div className="hidden md:flex md:w-3/5 bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">DecideHub</h1>
          {/* Anda bisa menambahkan logo sebagai SVG atau <img> di sini */}
        </div>
        <div className="my-auto max-w-md">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Decide faster<br />so you can do more
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            {/* Placeholder untuk deskripsi atau sub-tagline jika ada */}
          </p>
          {/* Anda bisa menambahkan ilustrasi sebagai SVG atau <img> di sini */}
          {/* Contoh: <img src="/path-to-your-illustration.svg" alt="Illustration" className="w-full opacity-80" /> */}
        </div>
        <div>
          <a href="#mingly-info" className="text-sm hover:underline text-indigo-200 flex items-center">
            {/* Ganti #mingly-info dengan link yang relevan */}
            {/* Anda bisa menambahkan ikon di sini jika mau, contoh: */}
            {/* <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="..."></path></svg> */}
            What is Mingly?
          </a>
        </div>
      </div>

      {/* Kolom Kanan (Form Login) */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-white p-8 md:p-12 lg:p-16">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Log in</h2>
          
          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
                placeholder="••••••••"
              />
              <div className="text-right mt-2">
                <a href="#forgot-password" /* Ganti #forgot-password dengan link yang relevan */
                   className="text-xs text-gray-500 hover:underline hover:text-red-600">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-200 font-semibold text-sm"
            >
              Log in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
          
          {/* Placeholder untuk logo/link "needflow" jika diperlukan */}
          <p className="mt-12 text-center text-xs text-gray-400">
            {/* <a href="#needflow" className="hover:underline">needflow</a> */}
            {/* Atau &copy; DecideHub / needflow */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;