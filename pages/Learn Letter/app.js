
// elements
var generate = document.getElementById("generate");
var numbers = document.getElementById("numbers");
var buttonsContainer = document.querySelector(".buttons-container");
var imageContainer = document.querySelector(".image-container");

// events
generate.addEventListener("click", generateButtons);
buttonsContainer.addEventListener("click", generateImage);
window.addEventListener("load", windowLoad);

// functions
function generateButtons(e) {

    e.preventDefault();
    imageContainer.innerHTML = "";
    // localStorage.clear();

    var num = numbers.value;

    if (!isNaN(num) && num > 0 && num <= 26) {
        buttonsContainer.innerHTML = "";
        for (var i = 0; i < num; i++) {
            var index = Math.floor(Math.random() * (25) + 1);
            var char = String.fromCharCode(index + 64);
            // document.write(index + " => " + String.fromCharCode(index + 64) + "<br>");
            var b = document.createElement("button");
            b.innerHTML = char;
            buttonsContainer.append(b);
            buttonsContainer.classList.add("showButtons");
        }
    }
    else {
        alert("You Must Enter Number Between 1 To 26");
    }

    // store in local storage
    var d = new Date();
    var his = new createObject("click", e.target.outerHTML, d.toString());
    storeHistory(his);
}

function generateImage(e) {
    e.preventDefault();

    imageContainer.innerHTML = "";

    var char = e.target.innerHTML;
    char = char.toLowerCase();

    var img = document.createElement("img");
    img.src = "images/" + char + ".jpg";

    imageContainer.append(img);
    imageContainer.classList.add("show");

    // store in local storage
    var d = new Date();
    var his = new createObject("click", e.target.outerHTML, d.toString());
    storeHistory(his);
}

function createObject(eventType, eventTarget, eventTime) {
    this.eventType = eventType;
    this.eventTarget = eventTarget;
    this.eventTime = eventTime;
}

function storeHistory(his) {
    var hisarray;
    hisarray = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
    hisarray.push(his);
    localStorage.setItem('history', JSON.stringify(hisarray));
    showHistory();
}

function windowLoad() {
    // store in local storage
    var d = new Date();
    var his = new createObject("load", window.location.href, d.toString());
    storeHistory(his);
}

function showHistory() {
    var hisarray = JSON.parse(localStorage.getItem('history'));
    for (var i = 0; i < hisarray.length; i++) {
        console.log(hisarray[i]);
    }
}
