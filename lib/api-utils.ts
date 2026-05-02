// lib/api-utils.ts
import { API_BASE } from './api-config';

export async function fetchFromApi(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  // Add a longer timeout and retries for Render cold starts/concurrency
  const maxRetries = 3;
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url, {
        ...options,
        // In Next.js 15, we might want to ensure it's not cached during build if it's dynamic
        // but for SSG it's better to cache.
        next: { revalidate: 3600 }, 
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
      }

      return await res.json();
    } catch (err) {
      lastError = err;
      console.error(`Fetch attempt ${i + 1} failed for ${url}:`, err);
      // Wait before retry
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
      }
    }
  }

  throw lastError;
}
