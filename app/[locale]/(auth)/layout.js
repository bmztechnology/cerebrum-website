'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-4 relative">
            {/* Back Button */}
            <Link
                href="/"
                className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </Link>

            {/* Auth Card Container */}
            <div className="w-full max-w-[480px]">
                {children}
            </div>

            {/* Simple footer reference if needed, consistent with "Secured by Clerk" usually inside the form */}
        </div>
    );
}
