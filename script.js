import data from "./data.json" assert { type: "json" };

const bars = document.querySelectorAll(".bar");
const barDays = document.querySelectorAll(".day");

// CHANGE BAR COLOR ON CLICK by adding active class

bars.forEach((bar) => {
  bar.addEventListener("click", function () {
    bars.forEach((bar) => {
      bar.parentElement.classList.remove("active");
    });
    this.parentElement.classList.add("active");
  });
});

// HOVER STATES (IN)

bars.forEach((bar) => {
  bar.addEventListener("mouseover", function () {
    const amount = "$" + this.parentElement.querySelector(".day").dataset.num;
    this.querySelector(".expenses").style.padding = "6px";
    this.querySelector(".expenses").style.opacity = "1";
    this.querySelector(".expenses").textContent = amount;
  });
});

// HOVER STATES (OUT)

bars.forEach((bar) => {
  bar.addEventListener("mouseout", function () {
    this.querySelector(".expenses").style.padding = "0px";
    this.querySelector(".expenses").textContent = "";
  });
});

// ASSIGN NUMBER TO EVERY DAY

assignNum();

function assignNum() {
  data.forEach((date, i) => {
    barDays[i].dataset.num = date.amount;
    console.log(barDays[i].dataset.num);
  });
}

// SET HEIGHT TO EVERY BAR

setHeight();

function setHeight() {
  let maxNum = 0;
  let index;
  barDays.forEach((barDay, i) => {
    if (+barDay.dataset.num > maxNum) {
      maxNum = +barDay.dataset.num;
      index = i;
    }
  });

  bars.forEach((bar, i) => {
    bar.style.height = `${(+barDays[i].dataset.num / maxNum) * 150}px`;
  });
}
