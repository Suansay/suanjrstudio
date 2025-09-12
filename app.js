document.getElementById('workWithUs').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaPaypal,
} from "react-icons/fa";
import { PiThreadsLogoFill } from "react-icons/pi";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/150" // replace with profile photo
          alt="profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
        />
        <h1 className="mt-4 text-2xl font-bold text-pink-700">Tea Nora</h1>
        <p className="text-gray-700 text-sm">
          📍🇺🇸 Your daily dose of energy 🇻🇳 💪✨
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4 text-pink-600 text-2xl">
        <FaInstagram />
        <FaTiktok />
        <FaFacebook />
        <FaPaypal />
      </div>

      {/* Links */}
      <div className="mt-6 w-full max-w-md flex flex-col gap-3">
        {/* PayPal */}
        <a
          href="#"
          className="bg-white shadow rounded-xl p-3 flex justify-center items-center font-medium"
        >
          PayPal
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="bg-white shadow rounded-xl p-3 flex items-center gap-3"
        >
          <FaInstagram className="text-pink-500 text-xl" />
          <span className="font-medium">tea.nora</span>
        </a>

        {/* TikTok */}
        <a
          href="#"
          className="bg-white shadow rounded-xl p-3 flex items-center gap-3"
        >
          <FaTiktok className="text-black text-xl" />
          <span className="font-medium">tea.nora</span>
        </a>

        {/* Facebook */}
        <a
          href="#"
          className="bg-white shadow rounded-xl p-3 flex items-center gap-3"
        >
          <FaFacebook className="text-blue-600 text-xl" />
          <span className="font-medium">Tri Tiên</span>
        </a>

        {/* Threads */}
        <a
          href="#"
          className="bg-white shadow rounded-xl p-3 flex items-center gap-3"
        >
          <PiThreadsLogoFill className="text-black text-xl" />
          <span className="font-medium">tea.nora</span>
        </a>
      </div>
    </div>
  );
}
