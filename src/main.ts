import "./style.css";

const gameName = "Miles Marsh";
document.title = gameName;

let counter: number = 0;
let skeletonCounter = 0;
let handCounter = 0;
let partyCounter = 0;
let currentTime: number = 0;
let pastTime: number = 0;
let multiplier: number = 0;
let partyCost: number = 10;
let skeletonRate: number = 0;
let factoryCount: number = 0;
// let factorySkeletons: number = 0;
let factoryCost: number = 100;

const head = document.createElement("h1");
const body = document.createElement("b1");

const count: HTMLDivElement = document.querySelector("#counter")!;
count.append(head);
head.innerHTML = "Amount of Bones: " + counter.toString();

const handCount: HTMLDivElement = document.querySelector("#hands")!;
handCount.append(body);
handCount.innerHTML = "Amount of hands: " + handCounter.toString();

const skeletonCount: HTMLDivElement = document.querySelector("#skeletons")!;
skeletonCount.append(body);
skeletonCount.innerHTML = "Amount of Skeletons: " + skeletonCounter.toString();

const skeletonRateCount: HTMLDivElement =
  document.querySelector("#skeletonRate")!;
skeletonRateCount.append(body);
skeletonRateCount.innerHTML = "Skeletons/S: " + skeletonRate.toString();

const partyCount: HTMLDivElement = document.querySelector("#party")!;
partyCount.append(body);
partyCount.innerHTML = "💀's in a party: " + partyCounter.toString();

const factories: HTMLDivElement = document.querySelector("#factory")!;
factories.append(body);
factories.innerHTML = "created: " + factoryCount.toString() + "Factories";

const rate: HTMLDivElement = document.querySelector("#rate")!;
rate.append(body);
rate.innerHTML = "Rate: " + multiplier.toFixed(1).toString();

const button = document.getElementById("btn");

button?.addEventListener("click", function handleClick(event) {
  counter += 1;
  head.innerHTML = "Amount of Bones: " + Math.round(counter).toString();
  console.log(event);
});

const upgradeHandButton = document.getElementById("btn2");

upgradeHandButton?.addEventListener("click", function handleClick(event) {
  if (counter >= 27) {
    counter -= 27;
    multiplier += 0.1;
    handCounter += 1;
    console.log(event);
  }
});

const upgradeSkeletonButton = document.getElementById("btn3");

upgradeSkeletonButton?.addEventListener("click", function handleClick(event) {
  if (counter >= 2) {
    spawnSkeleton(1);
    console.log(event);
  }
});

const upgradePartyButton = document.getElementById("btn4");

upgradePartyButton?.addEventListener("click", function handleClick(event) {
  if (skeletonCounter >= partyCost) {
    skeletonCounter -= partyCost;
    partyCounter += Math.round(partyCost);
    multiplier += 50;
    partyCost *= 1.15;
    document.querySelector("#btn4")!.innerHTML =
      Math.round(partyCost) + " 💀's for a party";
    console.log(event);
  }
});

const factoryButton = document.getElementById("btn5");

factoryButton?.addEventListener("click", function handleClick(event) {
  if (partyCounter >= factoryCost) {
    partyCounter -= factoryCost;
    // factorySkeletons += Math.round(factoryCost);
    factoryCount += 1;
    skeletonRate += 5;
    factoryCost *= 1.15;
    document.querySelector("#btn5")!.innerHTML =
      Math.round(factoryCost) + " 💀's in a party for a factory";
    console.log(event);
  }
});

window.requestAnimationFrame(increment);
function increment() {
  currentTime = Date.now();
  counter += multiplier / (5 * (currentTime - pastTime));
  if (factoryCount > 0) {
    spawnSkeleton(skeletonRate);
  }

  pastTime = currentTime;
  updateText();

  window.requestAnimationFrame(increment);
}

function updateText() {
  rate.innerHTML = "Rate: " + multiplier.toFixed(1).toString();
  head.innerHTML = "Amount of Bones: " + Math.round(counter);
  handCount.innerHTML = "Amount of hands: " + handCounter.toString();
  skeletonCount.innerHTML =
    "Amount of Skeletons: " + Math.round(skeletonCounter).toString();
  partyCount.innerHTML = "💀's in a party: " + Math.round(partyCounter);
  factories.innerHTML = "created: " + factoryCount.toString() + " Factories";
  skeletonRateCount.innerHTML = "Skeletons/S: " + skeletonRate.toString();
}

function spawnSkeleton(num: number) {
  counter -= num * 2;
  skeletonCounter += num * 1;
  multiplier += num * 2;
}
