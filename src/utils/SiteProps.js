export const host =
  process.env.VERCEL_URL === undefined
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;
