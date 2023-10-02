
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://chihvzzbmdserxhgglgy.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaWh2enpibWRzZXJ4aGdnbGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNjMxMzUsImV4cCI6MjAxMTgzOTEzNX0.PDe79QpHVjK5bckyWaPrKAr_B4T8X_ktHzRSczcyGjc'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase