const divs = document.getElementsByTagName("div");

console.log(divs[0]);

divs[0].innerText += `<button>버튼</button>`;

console.log(divs[0].innerText);

const newButton = document.createElement("button");
const newButtonText = document.createTextNode("버튼2");
const buttonTypeAttribute = document.createAttribute("type");
newButton.setAttributeNode(buttonTypeAttribute);
newButton.getAttribute("type", "button");
newButton.appendChild(newButtonText);
divs[0].appendChild(newButton);