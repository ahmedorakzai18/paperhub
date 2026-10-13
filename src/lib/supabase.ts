import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Returns the shared Supabase client. Created lazily so the app can build
 * and run before the env vars are set (e.g. on a fresh Vercel deploy).
 * Throws a clear error the first time it is actually used without config.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase env vars: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  client = createClient(url, key);
  return client;
}
