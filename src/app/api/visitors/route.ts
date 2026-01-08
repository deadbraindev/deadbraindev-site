import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'site:visitors';

export async function GET() {
    try {
        // Increment and get the new count
        const count = await kv.incr(COUNTER_KEY);

        return NextResponse.json({ count });
    } catch (error) {
        console.error('Failed to get visitor count:', error);
        // Return a fallback count if KV is not configured (local dev)
        return NextResponse.json({ count: null });
    }
}
