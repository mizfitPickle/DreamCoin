import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:justify-between text-center md:text-left">
          <p className="text-gray-500 text-sm">&copy; 2025 Dream. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-sky-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-sky-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
