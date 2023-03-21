//get reference to the container that already exist in the html
const container = document.querySelector("#container");
//create a new div
const content = document.createElement("div");
//add a class to the div
content.classList.add("content");
//add some text in the new div
content.textContent = "This is the glorious text-content!";
//append the div to container
container.appendChild(content);

//adding a <p> to container
const content2 = document.createElement("p");
//content2.classList.add("content2");
content2.textContent = "Hey I'm Red!";
//add color
content2.style.color = "red";
container.appendChild(content2);

const content3 = document.createElement("h3");
content3.classList.add("content3");
content3.textContent = "I'm blue h3!";
//another way to add inline style
content3.style.cssText = "color: blue; background: grey;";
container.appendChild(content3);

const content4 = document.createElement("div");
content4.style.cssText = "border-color: black; border-style: solid";
//put h3 in new div (content4)
const h3InDiv = document.createElement("h3");
h3InDiv.textContent = "I'm in a div";
content4.appendChild(h3InDiv);
//put p in new div (content4)
const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO!";
content4.appendChild(pInDiv);

//append new div content4 to container to be displayed
container.appendChild(content4);