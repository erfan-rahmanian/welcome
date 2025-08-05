'use client';

import React, { useEffect, useState } from 'react';
import styles from './Toast.module.scss';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  duration = 3000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <span className={styles.message}>{message}</span>
        <button 
          className={styles.closeButton} 
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast; 