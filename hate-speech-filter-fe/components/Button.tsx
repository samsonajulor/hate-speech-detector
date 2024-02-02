// components/Button.tsx
import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => (
  <button className={`bg-${variant === 'primary' ? 'blue' : 'gray'}-500 text-white px-4 py-2 rounded`} {...props} />
);

export default Button;
