import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rzt94zri",
  dataset: "production",
  apiVersion: "2025-10-18",
  useCdn: true,
});
