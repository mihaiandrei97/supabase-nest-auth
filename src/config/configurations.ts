export default () => ({
  port: Number(process.env.PORT) || 3000,
  secret: process.env.JWT_SECRET || '',
  supabase: {
    apiKey: process.env.SUPABASE_API_KEY || '',
    apiUrl: process.env.SUPABASE_API_URL || '',
  },
});
