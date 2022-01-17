import './sass/main.scss';
let navigation = document.querySelector(".navigation");
let view = document.querySelector(".view");
let content = document.querySelector(".view .content");

let navcount = content.offsetWidth / view.offsetWidth;
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
for (let i = 1; i <= navcount; i++) {
  let num = document.createElement("span");
  num.className = "num";
  num.dataset.index = i;
  num.textContent = i;
  next.before(num);
}
navigation.firstElementChild.nextSibling.classList.add("selected");
let nums = Array.from(document.querySelectorAll(".num"));

next.addEventListener("click", function () {
  let current = document.querySelector(".selected");
  if (nums.indexOf(current) + 1 < nums.length) {
    nums.forEach((e) => {
      e.classList.remove("selected");
    });

    current.nextElementSibling.classList.add("selected");
    content.style.transform = `translateX(${
      current.dataset.index * -view.offsetWidth
    }px)`;
  }
});
previous.addEventListener("click", function () {
  let current = document.querySelector(".selected");
  if (nums.indexOf(current) > 0) {
    nums.forEach((e) => {
      e.classList.remove("selected");
    });
    content.style.transform = `translateX(${
      (current.dataset.index - 2) * -view.offsetWidth
    }px)`;
    current.previousElementSibling.classList.add("selected");
  }
});
nums.forEach((e) => {
  e.addEventListener("click", function () {
    nums.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
    content.style.transform = `translateX(${
      nums.indexOf(e) * -view.offsetWidth
    }px)`;
  });
});
