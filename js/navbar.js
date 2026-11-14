(function () {
  // Theme: use the visitor's saved choice if there is one, otherwise follow the device setting
  var root = document.documentElement;
  var savedTheme = null;
  try { savedTheme = window.localStorage.getItem("theme"); } catch (e) {}
  if (savedTheme !== "dark" && savedTheme !== "light") savedTheme = null;
  var systemDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  root.setAttribute("data-theme", savedTheme || (systemDark && systemDark.matches ? "dark" : "light"));

  var currentPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  var isGerman = currentPath.indexOf("/de") === 0;

  // Inject navbar styles (sticky, border, hover effects)
  if (!document.getElementById("navbar-styles")) {
    var styleEl = document.createElement("style");
    styleEl.id = "navbar-styles";
    styleEl.textContent =
      ".site-navbar { padding-left: max(24px, calc((100% - 1000px) / 2 + 24px)); padding-right: max(16px, calc((100% - 1000px) / 2 + 16px)); position: sticky; top: 0; z-index: 1030; border-bottom: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04); transition: box-shadow 0.2s ease; }" +
      "@media (max-width: 575px) { .site-navbar { padding-left: 20px; } }" +
      ".site-navbar .nav-link { transition: color 0.2s ease, transform 0.15s ease; position: relative; }" +
      ".site-navbar .nav-link:hover { color: #005bbf !important; transform: translateY(-1px); }" +
      ".site-navbar .nav-link strong::after { content: ''; position: absolute; left: 0.5rem; right: 0.5rem; bottom: 4px; height: 2px; background: #0080ff; transform: scaleX(0); transform-origin: center; transition: transform 0.2s ease; }" +
      ".site-navbar .nav-link:hover strong::after { transform: scaleX(1); }" +
      "@media (min-width: 992px) { .site-navbar .nav-link.active strong::after { transform: scaleX(1); } }" +
      ".site-navbar .navbar-brand:hover strong { color: #005bbf !important; }" +
      ".site-navbar .theme-toggle { background: none; border: 0; cursor: pointer; line-height: inherit; }" +
      ".site-navbar .theme-toggle:focus { outline: none; }" +
      "@media (min-width: 992px) { .site-navbar .nav-social-first { margin-left: 10px; } }";
    document.head.appendChild(styleEl);
  }

  var navItems = isGerman ? [
    { text: "Publikationen", href: "/publications" },
    { text: "Forschung", href: "/research" },
    { text: "Bildung", href: "/education" },
    { text: "Erfahrung", href: "/experience" },
    { text: "Ehrenamt", href: "/volunteering" }
  ] : [
    { text: "Publications", href: "/publications" },
    { text: "Research", href: "/research" },
    { text: "Education", href: "/education" },
    { text: "Experience", href: "/experience" },
    { text: "Volunteering", href: "/volunteering" }
  ];

  var navLinks = navItems.map(function (item) {
    var isActive = currentPath === item.href;
    return '<li class="nav-item">' +
      '<a href="' + item.href + '" class="nav-link' + (isActive ? ' active" aria-current="page' : '') + '" style="color: #0080ff;' +
      (isActive ? ' font-weight: 900;" ' : '"') +
      '><strong>' + item.text + '</strong></a></li>';
  }).join("\n");

  // Determine asset prefix based on depth
  var isSubpage = currentPath !== "/" && currentPath !== "";
  var scholarSrc = isSubpage ? "../assets/images/icon-google-scholar.svg" : "assets/images/icon-google-scholar.svg";

  // Language toggle: active = bold blue, other = gray clickable
  // var langToggle = isGerman
  //   ? '<li class="nav-item"><a class="nav-link" href="/" style="color: #aaa;" title="Switch to English">EN</a></li>' +
  //     '<li class="nav-item"><a class="nav-link" style="color: #0080ff; font-weight: 900; cursor: default;">DE</a></li>'
  //   : '<li class="nav-item"><a class="nav-link" style="color: #0080ff; font-weight: 900; cursor: default;">EN</a></li>' +
  //     '<li class="nav-item"><a class="nav-link" href="/de" style="color: #aaa;" title="Auf Deutsch wechseln">DE</a></li>';
  var langToggle = '';

  var homeHref = isGerman ? "/de" : "/";

  var html = '<nav class="navbar navbar-expand-lg navbar-light site-navbar" style="background-color: white;">' +
    '<a class="navbar-brand" href="' + homeHref + '">' +
    '<strong style="color: #0080ff;" class="mr-3">Malaz Tamim</strong>' +
    '</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"' +
    ' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '<ul class="navbar-nav mr-auto justify-content-start">' + navLinks + '</ul>' +
    '<ul class="navbar-nav ms-auto">' +
    langToggle +
    '<li class="nav-item"><button type="button" class="nav-link theme-toggle" id="theme-toggle" title="Toggle dark mode" aria-label="Toggle dark mode"><i class="fas fa-moon"></i></button></li>' +
    '<li class="nav-item nav-social-first"><a class="nav-link" href="https://www.linkedin.com/in/malaztamim/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://twitter.com/tamimmalaz" target="_blank" title="X"><i class="fab fa-twitter"></i></a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.github.com/malaztamim" target="_blank" title="GitHub"><i class="fab fa-github"></i></a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://scholar.google.com/citations?hl=en&user=mP9hyzLSXHMC" target="_blank" title="Google Scholar" rel="noopener">' +
    '<img src="' + scholarSrc + '" alt="Google Scholar" style="width:18px;height:18px;vertical-align:middle;"></a></li>' +
    '</ul></div></nav>';

  var container = document.getElementById("navbar");
  if (container) {
    container.innerHTML = html;
  }

  // Dark mode toggle
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    var icon = toggle.querySelector("i");
    var renderToggle = function () {
      var dark = root.getAttribute("data-theme") === "dark";
      icon.className = dark ? "fas fa-sun" : "fas fa-moon";
      toggle.setAttribute("aria-pressed", String(dark));
    };
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      savedTheme = next;
      try { window.localStorage.setItem("theme", next); } catch (e) {}
      renderToggle();
    });
    renderToggle();
    // Follow device changes live until the visitor picks a theme themselves
    var onSystemChange = function (e) {
      if (savedTheme) return;
      root.setAttribute("data-theme", e.matches ? "dark" : "light");
      renderToggle();
    };
    if (systemDark && systemDark.addEventListener) systemDark.addEventListener("change", onSystemChange);
    else if (systemDark && systemDark.addListener) systemDark.addListener(onSystemChange);
  }
})();
