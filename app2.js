// app2.js

window.APP = {};

window.APP.SUPABASE_URL = "https://dvvktlngsiqerhsikfna.supabase.co";
window.APP.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dmt0bG5nc2lxZXJoc2lrZm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NTI5ODksImV4cCI6MjA3ODQyODk4OX0.IGIeZLmEWwUsof-Fj_vIAHhhlvIFN-yjVjHsJHluBcM";

window.APP.getSB = function () {
  if (window.APP._sb) return window.APP._sb;
  window.APP._sb = supabase.createClient(
    window.APP.SUPABASE_URL,
    window.APP.SUPABASE_ANON_KEY
  );
  return window.APP._sb;
};

// ✅ Stronger default avatar icon (clearly visible)
window.APP.noPhoto = function () {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='35%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='100%25' stop-color='%23e5e7eb'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='48' cy='48' r='46' fill='url(%23g)' stroke='%23cbd5e1' stroke-width='2'/%3E%3Ccircle cx='48' cy='40' r='16' fill='%2394a3b8'/%3E%3Cpath d='M22 82c5-16 47-16 52 0' fill='%2394a3b8'/%3E%3C/svg%3E";
};

// ✅ Apply image with safe fallback
window.APP.setSafeImage = function (imgEl, url) {
  imgEl.onerror = () => { imgEl.src = window.APP.noPhoto(); };
  imgEl.src = url || window.APP.noPhoto();
};