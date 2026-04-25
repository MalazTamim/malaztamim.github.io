document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  var isGerman = currentPath.indexOf("/de") === 0;

  var navItems = isGerman ? [
    { text: "Forschung", href: "/research" },
    { text: "Bildung", href: "/education" },
    { text: "Erfahrung", href: "/experience" },
    { text: "Ehrenamt", href: "/volunteering" }
  ] : [
    { text: "Research", href: "/research" },
    { text: "Education", href: "/education" },
    { text: "Experience", href: "/experience" },
    { text: "Volunteering", href: "/volunteering" }
  ];

  var navLinks = navItems.map(function (item) {
    var isActive = currentPath === item.href;
    return '<li class="nav-item">' +
      '<a href="' + item.href + '" class="nav-link" style="color: #0080ff;' +
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

  var html = '<nav class="navbar navbar-expand-lg navbar-light" style="background-color: white;">' +
    '<a class="navbar-brand" href="' + homeHref + '">' +
    '<strong style="color: #0080ff;" class="ml-lg-5 ml-md-5 ml-sm-1 ml-1 mr-3">Malaz Tamim</strong>' +
    '</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"' +
    ' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '<ul class="navbar-nav mr-auto justify-content-start">' + navLinks + '</ul>' +
    '<ul class="navbar-nav ms-auto">' +
    langToggle +
    '<li class="nav-item" style="margin-left: 10px;"><a class="nav-link" href="https://www.linkedin.com/in/malaztamim/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://twitter.com/tamimmalaz" target="_blank" title="X"><i class="fab fa-twitter"></i></a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.github.com/malaztamim" target="_blank" title="GitHub"><i class="fab fa-github"></i></a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://scholar.google.com/citations?hl=en&user=mP9hyzLSXHMC" target="_blank" title="Google Scholar" rel="noopener">' +
    '<img src="' + scholarSrc + '" alt="Google Scholar" style="width:18px;height:18px;vertical-align:middle;"></a></li>' +
    '</ul></div></nav>';

  var container = document.getElementById("navbar");
  if (container) {
    container.innerHTML = html;
  }
});
