import React from "react";
import { Button } from "@/components/ui/button";

// Custom SVG Icon for GitHub
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom SVG Icon for Google
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C14.03,4.73 15.6,5.33 16.85,6.45L19.05,4.24C17.1,2.33 14.8,1.5 12.19,1.5C7.02,1.5 3,5.55 3,12C3,18.45 7.02,22.5 12.19,22.5C17.6,22.5 21.5,18.33 21.5,12.33C21.5,11.76 21.45,11.43 21.35,11.1Z" />
    </svg>
);


const SocialLoginButtons: React.FC = () => {
  console.log("SocialLoginButtons loaded");

  const handleGoogleLogin = () => {
    console.log("Attempting to log in with Google...");
    // In a real application, this would trigger the Google OAuth flow.
  };

  const handleGitHubLogin = () => {
    console.log("Attempting to log in with GitHub...");
    // In a real application, this would trigger the GitHub OAuth flow.
  };

  return (
    <div className="w-full">
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Button variant="outline" type="button" onClick={handleGoogleLogin}>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" type="button" onClick={handleGitHubLogin}>
          <GithubIcon className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;