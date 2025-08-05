'use client';

import React, { forwardRef } from 'react';
import { InputProps } from '@/types';
import styles from './Input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      type = 'text',
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      required = false,
      disabled = false,
    },
    ref
  ) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          className={`${styles.input} ${error ? styles.error : ''} ${
            disabled ? styles.disabled : ''
          }`}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 