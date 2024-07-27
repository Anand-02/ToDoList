const btn = document.querySelector("#button");

function addTodos() {
  const input = document.querySelector("#todo");
  const inputValue = input.value;
  input.value = "";
  const dv = document.querySelector(".header");
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(inputValue);
  newDiv.appendChild(newContent);
  newDiv.className = 'newDiv';
  dv.insertAdjacentElement("afterend",newDiv);
  console.log(newDiv);
}

btn.addEventListener("click", addTodos);
