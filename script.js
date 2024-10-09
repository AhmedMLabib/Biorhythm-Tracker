let inputDate = document.querySelector("input.date");
let button = document.querySelector("button");
let rateSpans = document.querySelectorAll("span.rate");
let lineDivs = document.querySelectorAll("div.line");

button.addEventListener("click", () => {
  let inYear = inputDate.value.split("-")[0];
  let inMonth = inputDate.value.split("-")[1];
  let inDay = inputDate.value.split("-")[2];
  ageOnDays(inYear, inMonth, inDay);
});

function ageOnDays(year, month, day) {
  let birthDate = new Date(+year, +month - 1, +day);
  let nowDate = new Date();
  let days = Math.floor((nowDate - birthDate) / (1000 * 60 * 60 * 24));
  calcCycles(days);
}
function calcCycles(days) {
  let physical = days / 23;
  let physicalFloat = physical - Math.floor(physical);
  if (physicalFloat <= 0.5) {
    physicalRate = (0.5 - physicalFloat) * 200;
  } else {
    physicalRate = (physicalFloat - 0.5) * 200;
  }

  let emotional = days / 28;

  let emotionalFloat = emotional - Math.floor(emotional);
  if (emotionalFloat <= 0.5) {
    emotionalRate = (0.5 - emotionalFloat) * 200;
  } else {
    emotionalRate = (emotionalFloat - 0.5) * 200;
  }
  let mental = days / 33;

  let mentalFloat = mental - Math.floor(mental);
  if (mentalFloat <= 0.5) {
    mentalRate = (0.5 - mentalFloat) * 200;
  } else {
    mentalRate = (mentalFloat - 0.5) * 200;
  }
  rates = [
    physicalRate.toFixed(2),
    emotionalRate.toFixed(2),
    mentalRate.toFixed(2),
  ];
  for (let i = 0; i < 3; i++) {
    rateSpans[i].textContent = `${rates[i]}%`;
    lineDivs[i].style.width = `${rates[i]}%`;
  }
}
