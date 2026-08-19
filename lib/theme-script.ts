// Runs before paint so the stored (or system) color scheme applies with no
// flash of the wrong theme. Kept as a plain string so it can be inlined as a
// blocking <script> in the document head, ahead of any stylesheet.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('guide-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
