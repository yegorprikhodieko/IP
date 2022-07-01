import dotenv from 'dotenv';

import { createClient } from '@supabase/supabase-js'

let res = dotenv.config();

const supabaseUrl = 'https://thewypersucaykiwidpq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZXd5cGVyc3VjYXlraXdpZHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY1ODM2ODYsImV4cCI6MTk3MjE1OTY4Nn0.hJqq-lIJhfVIKH_A7T9RAaRjiLJoSMvKoCBQr3oCq4o'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

