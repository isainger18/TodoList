showNotes();

let btnText = document.getElementById("button-addon2");

btnText.addEventListener("click", getItems);

function getItems() {
  let inputText = document.getElementById("inputTxt");
  let localnotes = localStorage.getItem("notes");
  if (localnotes == null) {
    items = [];
  } else {
    items = JSON.parse(localnotes);
  }
  items.push(inputText.value);
  localStorage.setItem("notes", JSON.stringify(items));
  inputText.value = "";
  showNotes();
}

function showNotes() {
  let localnotes = localStorage.getItem("notes");
  let card = document.getElementById("cardtxt");
  if (localnotes == null) {
    items = [];
  } else {
    items = JSON.parse(localnotes);
  }
  let htmlTxt = "";
  items.forEach((e, index) => {
    htmlTxt += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${index + 1}</h5>
         <p class="card-text">${e}</p>
         </div>
      </div>`;
    card.innerHTML = htmlTxt;
  });
}
