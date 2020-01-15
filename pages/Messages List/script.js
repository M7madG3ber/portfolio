
/*
* select elements ( add , display )
* add events ( 3 => addMessage , deleteMessage , deleteMessages )
* add functions
*/

// elements add
var addItemsAction = document.querySelector(".addItems-action");
var addItemsInput = document.querySelector(".addItems-input");
var addItemsSubmit = document.querySelector(".addItems-submit");

// elements display
var displayItemsAction = document.querySelector(".displayItems-action");
var messagesList = document.querySelector(".messages-list");
var displayItemsClear = document.querySelector(".displayItems-clear");

// events
addItemsSubmit.addEventListener("click", addMessage);
messagesList.addEventListener("click", deleteMessage);
displayItemsClear.addEventListener("click", deleteMessages);

// functions
function addMessage(e) {
   e.preventDefault();
   var message = addItemsInput.value;
   if (message.length > 0) {
      showAction(addItemsAction, message + " Added Successfuly", 1);
      createItem(message);
      addItemsInput.value = "";
   }
   else {
      showAction(addItemsAction, "Please Add Message", 2);
   }
}
function deleteMessage(e) {
   e.preventDefault();
   var message = e.target.parentElement.parentElement;
   var h = e.target.parentElement.previousElementSibling;
   messagesList.removeChild(message);
   showAction(displayItemsAction, h.innerHTML + " Message Deleted successfully", 2);
}

function deleteMessages(e) {
   var items = document.querySelectorAll(".messages-item");
   if (items.length > 0) {
      messagesList.innerHTML = "";
      showAction(displayItemsAction, "Messages Deleted successfully", 2);
   }
   else {
      showAction(displayItemsAction, "Not Found Any Messages", 1);
   }

}

function showAction(element, message, type) {
   element.innerHTML = message;
   if (type == 1) {
      element.classList.add("success");
      setTimeout(function () {
         element.classList.remove('success');
      }, 2000);
   }
   else {
      element.classList.add("alert");
      setTimeout(function () {
         element.classList.remove('alert');
      }, 2000);
   }
}

function createItem(message) {
   var parent = document.createElement('div');
   parent.classList.add('messages-item');
   parent.innerHTML = `<h4 class="messages-item__title">` + message + `</h4>
    <a href="#" class="messages-item__link">
     <i class="fa fa-trash"></i>
    </a>`;
   messagesList.appendChild(parent)
}