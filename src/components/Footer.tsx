import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} John Dao. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/johndao1005" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/johndao" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;