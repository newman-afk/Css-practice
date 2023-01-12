const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    const last = document.querySelector(".active");
    last.classList.remove("active");
    panel.classList.add("active");
  });
});
