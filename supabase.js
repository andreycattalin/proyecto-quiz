const { createClient } = supabase;
const mySupabase = createClient('https://nrxjmfurruizoaevsnod.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeGptZnVycnVpem9hZXZzbm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkxNDk1ODQsImV4cCI6MTk2NDcyNTU4NH0.KrAQ1wlr9An24Xzu_fnVFnjHB0UjuaF52JFBdhLrBIA')

async function loadDatabase() {
    const { data, error } = await mySupabase.from('Questions').select()
    console.log(data)
}

loadDatabase();