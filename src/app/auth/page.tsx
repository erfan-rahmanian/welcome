'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { authFormSchema, AuthFormSchema } from '@/lib/validation';
import { authService } from '@/services/authService';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Toast from '@/components/ui/Toast';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import styles from './page.module.scss';

const AuthPage: React.FC = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [formData, setFormData] = useState<AuthFormSchema>({
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<Partial<AuthFormSchema>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof AuthFormSchema]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      authFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      if (error.errors) {
        const newErrors: Partial<AuthFormSchema> = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0] as keyof AuthFormSchema] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await authService.fetchRandomUser();
      const user = response.results[0];
      
      setUser(user);
      setToast({
        message: 'Login successful! Redirecting to dashboard...',
        type: 'success'
      });
      
      // اضافه کردن تاخیر کوتاه برای نمایش loading state
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Login failed:', error);
      setToast({
        message: 'Login failed. Please try again.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Please enter your phone number to continue</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="09XXXXXXXXX"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            error={errors.phoneNumber}
            required
          />
          
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>
      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <LoadingOverlay 
        isVisible={isLoading} 
        message="Logging in..." 
      />
    </div>
  );
};

export default AuthPage; 