import "./style.css";

let counter: number = 0;

const count: HTMLDivElement = document.querySelector("#counter")!;

const head = document.createElement("h1");
count.append(head);
head.innerHTML = "Amount of Bones: " + counter.toString();

const gameName = "Miles Marsh";

document.title = gameName;

const button = document.getElementById("btn");

button?.addEventListener("click", function handleClick(event) {
  counter += 1;
  console.log(counter);

  head.innerHTML = "Amount of Bones: " + counter.toString();
});
