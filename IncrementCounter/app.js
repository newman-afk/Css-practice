const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = counter.getAttribute("data-target");
  counter.innerHTML = 0;
  const step = target / 200;
  function updateCounter() {
    const now = +counter.innerText;
    if (now < target) {
      counter.innerHTML = Math.ceil(now + step);
      setTimeout(() => {
        updateCounter();
      }, 1);
    } else {
      counter.innerHTML = target;
    }
  }
  updateCounter();
});
