import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-start">
        <Link to="/" className="flex items-center gap-2 text-foreground hover:text-foreground/90 transition-colors">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold tracking-tight">
            QuickAccess
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;