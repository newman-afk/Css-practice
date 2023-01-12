const imgs = document.querySelectorAll("img");
const lis = document.querySelectorAll("li");

lis.forEach((li, index) => {
  li.addEventListener("click", function () {
    imgs.forEach((img) => img.classList.remove("active"));
    lis.forEach((li) => li.classList.remove("active"));

    imgs[index].classList.add("active");
    lis[index].classList.add("active");
  });
});
