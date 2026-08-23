(function () {
  var header = document.querySelector(".site-header");
  var hours = document.querySelectorAll(".hours li");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var today = new Date().getDay();
  hours.forEach(function (row) {
    var days = (row.getAttribute("data-days") || "").split(",");
    if (days.indexOf(String(today)) !== -1) {
      row.classList.add("is-today");
    }
  });
})();
