'use client';

import React from 'react';
import { ButtonProps } from '@/types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  children,
  className = '',
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled || loading ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <span className={styles.spinner} />}
      {children}
    </button>
  );
};

export default Button; 