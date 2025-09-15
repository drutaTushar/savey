import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: 'savey-save-link',
    title: 'Save link to Savey',
    contexts: ['link', 'page']
  });
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  const url = info.linkUrl || info.pageUrl;
  save(url);
});

browser.action.onClicked.addListener(async (tab) => {
  save(tab.url);
});

function save(url) {
  fetch(`${SUPABASE_URL}/rest/v1/bookmarks`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  });
}
