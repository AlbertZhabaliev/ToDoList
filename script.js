var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//All elemnts with  tag <li></li>
var nodeList = document.querySelectorAll("li");
//var nodeBtn = document.getElementsByName("remove");

function inputLength() {
    return input.value.length;
}
//creates an Element of Type Li and childNode Button"remove"
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    //addds click and ".done" toggle functionality
    li.addEventListener("click", function () {
        li.classList.toggle("done")
    })
    // Code below adds a Remove Button as a childNode
    // to a just created li Elemnt
    addRemoveButon(li);
    input.value = "";
}
// ...adds a Remove Button
function addRemoveButon(temp) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("remove"));
    btn.addEventListener("click", delParentNodeAfterMouseClick);
    temp.appendChild(btn);
}
//event for corresponding elemnt
function delParentNodeAfterMouseClick(event) {
    temp = event.target;
    temp.parentElement.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0
        && event.keyCode === 13) {
        createListElement();
    }
}
//adds StrikeOut functionallaty to an existing elemnt
function strikeOut() {
    nodeList.forEach(function (liItem) {
        liItem.addEventListener("click", function () {
            liItem.classList.toggle("done")
        })
    });
}
function addDelButtonToAnExistingLi() {
    nodeList.forEach(function (liItem) {
        addRemoveButon(liItem)
    })
}

// button.classList.toggle("done"); 
//Toggles all List Elemnts, not one !!!
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
strikeOut();
addDelButtonToAnExistingLi();

// for(i=0; i<ul.childNodes.length; i++){
//     addBtnToArray =  this.children[i.childNodes[1]];  
//    }