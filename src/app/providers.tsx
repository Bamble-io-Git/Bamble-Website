'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init('phc_FMJqO2aJ1WHKfIP4lUQjT950ObHJi1tU34KpcB3qOez', {
    api_host: 'https://eu.i.posthog.com',
    capture_pageview: false,
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}> {children} </PostHogProvider>;
}
