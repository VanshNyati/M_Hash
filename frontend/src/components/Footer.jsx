import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A2A] text-[#E6E6FA] p-8 font-roboto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="bg-[#E6E6FA]/10 rounded-xl p-6 md:w-1/3">
          <h2 className="font-outfit text-4xl font-bold mb-4">Every moment matters.</h2>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="font-outfit text-xl">Givingli</span>
          </div>
          <p className="text-sm mt-4">© 2023 All Rights Reserved, Givingli Inc.</p>
        </div>

        <div className="md:w-1/3 space-y-4">
          <div className="bg-[#E6E6FA]/10 rounded-xl p-6">
            <h3 className="font-outfit text-xl font-semibold mb-2">Support</h3>
            <p className="text-sm mb-2">Have questions? Get in touch or check out our Help Center.</p>
            <p className="text-sm">You can also text our support team at (310) 775-5384 or email us at help@givingli.com</p>
          </div>
          <div className="bg-[#E6E6FA]/10 rounded-xl p-6 flex justify-between">
            <Link to="/terms" className="text-sm hover:underline">Terms of use</Link>
            <Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
          </div>
        </div>

        <div className="bg-[#E6E6FA]/10 rounded-xl p-6 md:w-1/4">
          <h3 className="font-outfit text-xl font-semibold mb-4">Social</h3>
          <div className="flex flex-col gap-4">
            <a href="https://instagram.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
            <a href="https://facebook.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
