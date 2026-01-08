'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCount() {
            try {
                const res = await fetch('/api/visitors');
                const data = await res.json();
                setCount(data.count);
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchCount();
    }, []);

    const displayCount = count !== null
        ? count.toString().padStart(6, '0')
        : '------';

    return (
        <div className="flex flex-col items-center gap-1 text-sm">
            <span className="font-mono bg-black text-green-400 px-2 py-1 border border-gray-600">
                {loading ? (
                    <span className="blink">Loading...</span>
                ) : (
                    <>Visitors: {displayCount}</>
                )}
            </span>
        </div>
    );
}
