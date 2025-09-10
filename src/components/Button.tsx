import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    style={{ padding: '8px 16px', borderRadius: '4px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
  >
    {children}
  </button>
);

export default Button;
