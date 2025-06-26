import React from 'react';

// Import custom layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import custom functional component
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;