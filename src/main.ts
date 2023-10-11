import "./style.css";

let counter: number = 0;

const count: HTMLDivElement = document.querySelector("#counter")!;

const head = document.createElement("h1");
count.append(head);
head.innerHTML = "Amount of Bones: " + counter.toString();

const gameName = "Miles Marsh";

document.title = gameName;

const button = document.getElementById("btn");

const button2 = document.getElementById("btn2");

button?.addEventListener("click", function handleClick(event) {
  counter += 1;
  head.innerHTML = "Amount of Bones: " + Math.round(counter).toString();
  console.log(counter);
  console.log(event);
});

let currentTime: number = 0;
let pastTime: number = 0;
let multiplier: number = 0;

window.requestAnimationFrame(increment);
function increment() {
  currentTime = Date.now();
  console.log(currentTime - pastTime);
  counter += multiplier / (5 * (currentTime - pastTime));
  pastTime = currentTime;

  head.innerHTML = "Amount of Bones: " + Math.round(counter).toString();

  window.requestAnimationFrame(increment);
}

button2?.addEventListener("click", function handleClick(event2) {
  buy_auto();
  console.log(event2);
});

function buy_auto() {
  if (counter >= 10) {
    counter -= 10;
    multiplier += 1;
  }
}
