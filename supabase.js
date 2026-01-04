import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://asdzewabsbpmskmtsekj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzZHpld2Fic2JwbXNrbXRzZWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMTY1ODcsImV4cCI6MjA4MTc5MjU4N30.NOccLhA7E0MUB1ZNDk4f0NjhcV2qSEQx0i058zrZqPE'
)
