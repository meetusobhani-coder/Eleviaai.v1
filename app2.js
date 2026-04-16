// app2.js — shared Supabase config (clean)

window.APP = {};

window.APP.SUPABASE_URL = "https://dvvktlngsiqerhsikfna.supabase.co";
window.APP.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dmt0bG5nc2lxZXJoc2lrZm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NTI5ODksImV4cCI6MjA3ODQyODk4OX0.IGIeZLmEWwUsof-Fj_vIAHhhlvIFN-yjVjHsJHluBcM"; // ✅ replace

window.APP.getSB = function () {
  if (window.APP._sb) return window.APP._sb;

  if (!window.supabase) {
    throw new Error("Supabase library not loaded");
  }

  window.APP._sb = window.supabase.createClient(
    window.APP.SUPABASE_URL,
    window.APP.SUPABASE_ANON_KEY
  );

  return window.APP._sb;
};

window.APP.escapeHtml = function (str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

window.APP.noPhoto = function () {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Crect width='72' height='72' fill='%23f3f4f6'/%3E%3C/svg%3E";
};
