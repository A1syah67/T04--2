

document.addEventListener('DOMContentLoaded', function () {

  // Identify the current page
  var path = window.location.pathname.split('/').pop();

  if (path === '' || path === 'index.html') {
    path = 'index.html';
  }


  // Navigation links
  var navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {

    var linkPage = link.getAttribute('data-page');

    // Highlight the current page
    if (linkPage === path) {
      link.setAttribute('aria-current', 'page');
    }

    // JavaScript navigation
    link.addEventListener('click', function (e) {
      e.preventDefault();

      goToPage(link.getAttribute('href'));
    });

  });


  // Logo returns to Home
  var brandLink = document.querySelector('.brand');

  if (brandLink) {

    brandLink.addEventListener('click', function (e) {
      e.preventDefault();

      goToPage('index.html');
    });

  }
// Create an SVG inside the responsive container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600") // logical canvas; scales with container
  .style("border", "1px solid black"); // visual boundary while developing

// Test shape: a thin blue rectangle near the top-left
svg
  .append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {

    toggle.addEventListener('click', function () {

      var isOpen = links.classList.toggle('open');

      toggle.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
      );

    });

  }


  // Footer year
  var yearEl = document.getElementById('current-year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});


// Navigate to another page
function goToPage(href) {
  window.location.href = href;
}