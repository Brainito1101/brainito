"use client";

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LogoutContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        console.log('[Website LogoutSync] Page loaded - clearing all auth data');

        localStorage.clear();
        sessionStorage.clear();
        console.log('[Website LogoutSync] Website storage cleared');

        const source = searchParams.get('source');

        if (source === 'dashboard') {
            console.log('[Website LogoutSync] Redirecting to homepage (initiated by dashboard)');
            router.push('/');
        } else {
            console.log('[Website LogoutSync] Redirecting to homepage with logout flag');
            router.push('/?logout=true');
        }
    }, [router, searchParams]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Logging out...</h2>
                <p className="text-gray-500">Please wait while we secure your session.</p>
            </div>
        </div>
    );
}

export default function LogoutSync() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LogoutContent />
        </Suspense>
    );
}
