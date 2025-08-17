
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vilipfvqwetmfqtsaohn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbGlwZnZxd2V0bWZxdHNhb2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDQzNjgsImV4cCI6MjA3MTAyMDM2OH0.wpdQi5UzOWCwiz4gxQKLjxF5TQXQG4jDRhfRH1dF8sg'
export const supabase = createClient(supabaseUrl, supabaseKey);