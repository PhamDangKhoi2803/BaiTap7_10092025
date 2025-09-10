import React from 'react';

export interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
);

export default InputText;
