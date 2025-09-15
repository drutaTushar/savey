const { writeFileSync } = require('fs');

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set');
}

const content = [
  `export const SUPABASE_URL = '${SUPABASE_URL}';`,
  `export const SUPABASE_ANON_KEY = '${SUPABASE_ANON_KEY}';`,
  ''
].join('\n');

writeFileSync('config.js', content);
writeFileSync('extension/config.js', content);
