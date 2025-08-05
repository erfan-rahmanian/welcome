'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginFormRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the correct auth page
    router.replace('/auth');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      fontSize: '1.25rem',
      color: '#718096'
    }}>
      Redirecting to login page...
    </div>
  );
} 