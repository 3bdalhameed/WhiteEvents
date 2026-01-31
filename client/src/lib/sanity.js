import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rzt94zri",       // ← your Sanity project ID
  dataset: "production",       // ← default dataset
  apiVersion: "2025-10-18",    // ← use today’s date
  useCdn: true,                // ← cache for faster reads
});
