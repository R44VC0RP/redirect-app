import { redirect } from 'next/navigation';

export default async function Home() {
  const redirectUrl = process.env.REDIRECT_URL;
  
  if (redirectUrl) {
    redirect(redirectUrl);
  }

  // Fallback UI in case REDIRECT_URL is not set
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">No Redirect URL Set</h1>
        <p className="text-gray-600">Please set the REDIRECT_URL environment variable.</p>
      </div>
    </div>
  );
}
