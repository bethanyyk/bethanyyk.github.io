import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:bethanyyerimk@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <button className="social-button email-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 4H2C0.89 4 0 4.9 0 6V18C0 19.1 0.89 20 2 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4ZM20.55 6L12 11.26L3.45 6H20.55ZM2 18V7.91L12 13.5L22 7.91V18H2Z" fill="white"></path>
          </svg>
          <p className="text">bethanyyerimk@gmail.com</p>
        </button>
      </a>
      
      <a href="https://www.linkedin.com/in/bethanyyk" target="_blank" rel="noopener noreferrer" className="social-link">
        <button className="social-button linkedin-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.23 0H1.77C0.79 0 0 0.8 0 1.78V22.2C0 23.2 0.8 24 1.77 24H22.23C23.2 24 24 23.2 24 22.22V1.78C24 0.8 23.2 0 22.23 0ZM7.06 20.43H3.56V9H7.06V20.43ZM5.31 7.5C4.2 7.5 3.4 6.7 3.4 5.6C3.4 4.5 4.2 3.7 5.31 3.7C6.42 3.7 7.21 4.5 7.21 5.6C7.21 6.7 6.42 7.5 5.31 7.5ZM20.43 20.43H16.93V14.65C16.93 12.87 16.89 10.71 14.72 10.71C12.53 10.71 12.19 12.58 12.19 14.52V20.43H8.69V9H12.03V10.65H12.09C12.59 9.78 13.63 8.85 15.28 8.85C19.02 8.85 20.43 11.03 20.43 14.17V20.43Z" fill="white"></path>
          </svg>
          <p className="text">bethanyyk</p>
        </button>
      </a>

      <a href="https://github.com/bethanyyk/" target="_blank" rel="noopener noreferrer" className="social-link">
        <button className="social-button github-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
          </svg>
          <p className="text">bethanyyk</p>
        </button>
      </a>
    </footer>
  );
}

export default Footer;