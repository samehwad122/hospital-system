import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwzyfrmgsnkwzrxbwrso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3enlmcm1nc25rd3pyeGJ3cnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMzkxNDgsImV4cCI6MjA2OTcxNTE0OH0.mIiddOPuYDceF5rdS7o8frIFzi5HKJYASYmAXxSe8sg';

export const supabase = createClient(supabaseUrl, supabaseKey);
