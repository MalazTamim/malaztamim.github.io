document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  var isGerman = currentPath.indexOf("/de") === 0;

  // Asset prefix: subpages need ../, root does not
  var isSubpage = currentPath !== "/" && currentPath !== "";
  var scholarSrc = isSubpage ? "../assets/images/icon-google-scholar.svg" : "assets/images/icon-google-scholar.svg";

  // Inject footer styles once
  if (!document.getElementById("footer-styles")) {
    var styleEl = document.createElement("style");
    styleEl.id = "footer-styles";
    styleEl.textContent =
      // Sticky footer: keep footer pinned to bottom of viewport when content is short
      "html, body { height: auto; }" +
      "body { display: flex; flex-direction: column; min-height: 100vh; margin: 0; }" +
      "body > .site-footer { margin-top: auto; }" +
      ".site-footer { width: 100%; padding: 36px 20px 24px; background: linear-gradient(180deg, #f8f9fa 0%, #eef1f5 100%); border-top: 1px solid #e5e7eb; text-align: center; color: #555; box-sizing: border-box; }" +
      ".site-footer .footer-social { display: flex; justify-content: center; gap: 14px; margin-bottom: 18px; }" +
      ".site-footer .footer-social a { display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; border-radius: 50%; background: #ffffff; color: #0080ff; font-size: 1.05rem; text-decoration: none; border: 1px solid #e5e7eb; transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease; }" +
      ".site-footer .footer-social a:hover { transform: translateY(-2px); background: #0080ff; color: #ffffff; border-color: #0080ff; }" +
      ".site-footer .footer-social a img { width: 18px; height: 18px; filter: brightness(0) saturate(100%) invert(36%) sepia(98%) saturate(2057%) hue-rotate(192deg) brightness(101%) contrast(101%); transition: filter 0.18s ease; }" +
      ".site-footer .footer-social a:hover img { filter: brightness(0) invert(1); }" +
      ".site-footer .footer-text { font-size: 0.82rem; margin: 0; color: #888; letter-spacing: 0.02em; }";
    document.head.appendChild(styleEl);
  }

  var locationText = isGerman ? "München, Deutschland" : "Munich, Germany";

  var html = '<footer class="site-footer">' +
    '<div class="footer-social">' +
      '<a href="https://www.linkedin.com/in/malaztamim/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
      '<a href="https://twitter.com/tamimmalaz" target="_blank" rel="noopener" title="X" aria-label="X (Twitter)"><i class="fab fa-twitter"></i></a>' +
      '<a href="https://www.github.com/malaztamim" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>' +
      '<a href="https://scholar.google.com/citations?hl=en&user=mP9hyzLSXHMC" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar"><img src="' + scholarSrc + '" alt="Google Scholar"></a>' +
      '<a href="mailto:malaz(dot)tamim(at)tum(dot)de" title="Email" aria-label="Email"><i class="fas fa-envelope"></i></a>' +
    '</div>' +
    '<p class="footer-text">&copy; 2026 Malaz Tamim &middot; ' + locationText + '</p>' +
  '</footer>';

  // Either replace a placeholder div or append to body
  var container = document.getElementById("footer");
  if (container) {
    container.innerHTML = html;
  } else {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper.firstChild);
  }
});
