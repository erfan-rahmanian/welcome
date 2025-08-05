'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';
import Toast from '@/components/ui/Toast';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import styles from './page.module.scss';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const { user, isLoading, logout } = useAuth();
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    setIsLoggingOut(true);
    logout();
    setToast({
      message: 'Logout successful! Redirecting to login...',
      type: 'info'
    });
    
    // اضافه کردن تاخیر کوتاه برای نمایش loading state
    setTimeout(() => {
      router.push('/auth');
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to the Dashboard</h1>
          <Button
            variant="secondary"
            size="small"
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            Logout
          </Button>
        </header>

        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className={styles.avatarImage}
            />
          </div>
          
          <div className={styles.userDetails}>
            <h2 className={styles.userName}>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className={styles.userEmail}>{user.email}</p>
            <p className={styles.userLocation}>
              {user.location.city}, {user.location.state}, {user.location.country}
            </p>
            <p className={styles.userPhone}>Phone: {user.phone}</p>
          </div>
        </div>

        <div className={styles.welcomeMessage}>
          <p>You have successfully logged in! This is your personal dashboard.</p>
        </div>
      </div>
      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <LoadingOverlay 
        isVisible={isLoggingOut} 
        message="Logging out..." 
      />
    </div>
  );
};

export default DashboardPage; 