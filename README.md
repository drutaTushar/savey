# Savey

Simple web interface and browser extension for saving bookmarks to a Supabase table.

## Setup

1. Replace `https://your-project.supabase.co` and `public-anon-key` in the files with your Supabase project URL and anon key.
2. Ensure a `bookmarks` table exists in Supabase with at least a `url` column (and optional `title`).

## Web App / PWA

Open `index.html` in a browser or host it as a static site. When installed as a Progressive Web App, it registers as a share target on Android. Sharing a link to **Savey** will send the URL to Supabase.

## Firefox Extension

Load the `extension` directory as a temporary extension in Firefox. It adds a context menu and toolbar button to send the current page or a link to Supabase.
