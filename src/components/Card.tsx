import React from 'react';

export interface CardProps {
  title: string;
  description?: string;
  price?: number;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, price, children }) => (
  <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {price !== undefined && <p><b>Giá:</b> {price}₫</p>}
    {children}
  </div>
);

export default Card;
