import "./style.css";

const gameName = "Miles Marsh";
document.title = gameName;

interface Item {
  name: string;
  cost: number;
  rate: number;
  costType: string;
}

const availableItems: Item[] = [
  { name: "hand", cost: 27, rate: 0.1, costType: "bone" },
  { name: "skeleton", cost: 206, rate: 2, costType: "bone" },
  { name: "party", cost: 10, rate: 50, costType: "skeleton" },
  { name: "factory", cost: 100, rate: 5, costType: "party" },
];

let test: string = availableItems[0].name;
console.log(test);
let counter: number = 0;
let skeletonCounter = 0;
let handCounter = 0;
let partyCounter = 0;
let currentTime: number = 0;
let pastTime: number = 0;
let multiplier: number = 0;
let skeletonRate: number = 0;
let factoryCount: number = 0;

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
  if (counter >= availableItems[0].cost) {
    counter -= availableItems[0].cost;
    multiplier += availableItems[0].rate;
    handCounter += 1;
    console.log(event);
  }
});

const upgradeSkeletonButton = document.getElementById("btn3");

upgradeSkeletonButton?.addEventListener("click", function handleClick(event) {
  if (counter >= availableItems[1].cost) {
    spawnSkeleton(1);
    console.log(event);
  }
});

const upgradePartyButton = document.getElementById("btn4");

upgradePartyButton?.addEventListener("click", function handleClick(event) {
  if (skeletonCounter >= availableItems[2].cost) {
    skeletonCounter -= availableItems[2].cost;
    partyCounter += Math.round(availableItems[2].cost);
    multiplier += availableItems[2].rate;
    availableItems[2].cost *= 1.15;
    document.querySelector("#btn4")!.innerHTML =
      Math.round(availableItems[2].cost) + " 💀's for a party";
    console.log(event);
  }
});

const factoryButton = document.getElementById("btn5");

factoryButton?.addEventListener("click", function handleClick(event) {
  if (partyCounter >= availableItems[3].cost) {
    partyCounter -= availableItems[3].cost;
    // factorySkeletons += Math.round(factoryCost);
    factoryCount += 1;
    skeletonRate += availableItems[3].rate;
    availableItems[3].cost *= 1.15;
    document.querySelector("#btn5")!.innerHTML =
      Math.round(availableItems[3].cost) + " 💀's in a party for a factory";
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
  counter -= num * availableItems[1].cost;
  skeletonCounter += num;
  multiplier += num * availableItems[1].rate;
}
