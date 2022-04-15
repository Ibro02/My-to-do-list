let temp = 0;
let tempNum = 0;

function addElement() {
  //New element elements
  let newElement = document.createElement("div");
  newElement.classList = "paragraph";
  newElement.innerText = document.querySelector("input").value;
  //Button elements
  let button = document.createElement("button");
  button.classList = "del";
  button.innerText = "X";
  button.value = button;
  document.querySelector(".list").appendChild(newElement);
  document.querySelector(".list").appendChild(button);
  newElement.id = "par" + temp;
  button.id = temp;
  button.onclick = function () {
    tempNum = button.id;
    deleteElement();
  };
  temp++;
}

function deleteElement() {
  document.querySelector(`#par${tempNum}`).remove();
  document.getElementById(tempNum).remove();
}
