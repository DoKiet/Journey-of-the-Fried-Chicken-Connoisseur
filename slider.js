(function () {
  function setup(slider) {
    var track = slider.querySelector(".slider-track");
    var slides = slider.querySelectorAll(".slider-slide");
    var prev = slider.querySelector(".slider-prev");
    var next = slider.querySelector(".slider-next");
    var count = slider.querySelector(".slider-count");
    var total = slides.length;
    var index = 0;

    function show(i) {
      index = (i + total) % total;
      track.style.transform = "translateX(" + -index * 100 + "%)";
      count.textContent = index + 1 + " / " + total;
    }

    prev.addEventListener("click", function () { show(index - 1); });
    next.addEventListener("click", function () { show(index + 1); });

    slider.setAttribute("tabindex", "0");
    slider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });

    var startX = null;
    track.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(dx < 0 ? index + 1 : index - 1);
      startX = null;
    });

    show(0);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var sliders = document.querySelectorAll(".slider");
    for (var i = 0; i < sliders.length; i++) setup(sliders[i]);
  });
})();
