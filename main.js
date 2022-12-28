let addBtn = document.querySelector(".addNote");
let popUp = document.querySelector(".popUp");
let wholeContent = document.querySelector(".container");
let exitPopUp = document.querySelector(".exit");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let addNewNote = document.querySelector("#addNewNote");

addBtn.addEventListener("click", function () {
  showPopUp();
});
function showPopUp() {
  popUp.style.visibility = "visible";
  wholeContent.classList.add("blurbg");
}
exitPopUp.addEventListener("click", function () {
  exitPoppedContent();
});
function exitPoppedContent() {
  popUp.style.visibility = "hidden";
  wholeContent.classList.remove("blurbg");
  document.getElementById("addNewNote").innerHTML = "Add note";
        title.value = "";
        description.value = "";
}
title.addEventListener("input", function () {
  noteTitle = title.value;
});
description.addEventListener("input", function () {
  descriptionContent = description.value;
});

const date = new Date();

let monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


addNewNote.addEventListener("click", function () {
  if(document.getElementById("addNewNote").innerHTML == "Add note"){
    
  let htmlFormat =
   ` <div class="note">
        <div class="content">
            <div class="head">
                <p>${noteTitle}</p>
            </div>
            <div class="text">
                <p>${descriptionContent}</p>
            </div>
            <hr>
            <div class="button">
                <div class="date">${
                monthList[date.getMonth()]
                } ${date.getDate()}, ${date.getFullYear()}</div>
                <div class="edit">
                    
                    <i class="fa-solid fa-pen-to-square edit-btn"></i>
                    <i class="fa-solid fa-trash delete-btn"></i>
                    </div>
            </div>
        </div>
    </div>`;
  wholeContent.insertAdjacentHTML("beforeend", htmlFormat);
  title.value = "";
  description.value = "";
  exitPoppedContent();

deleteNote();
editNote();
}
})


function deleteNote(){
 note = document.querySelectorAll(".note");
 
  let deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach(function (d, index) {
    d.addEventListener("click", function () {
      note[index + 1].remove();
    });
  });
}



function editNote(){
    let editBtn = document.querySelectorAll(".edit-btn");
  editBtn.forEach(function (e, index) {
    e.addEventListener("click", function () {
      document.getElementById("addNewNote").innerHTML = "Update Note";
     console.log(index)
      showPopUp();
      title.value = note[index + 1].querySelector(".head p").innerHTML;
      description.value = note[index + 1].querySelector(".text p").innerHTML;
      a=index;
     
      addNewNote.addEventListener("click", function () {
        if(document.getElementById("addNewNote").innerHTML == "Update Note"){
        note[a + 1].querySelector(".head p").innerHTML = noteTitle;
        note[a + 1].querySelector(".text p").innerHTML = descriptionContent;
        console.log(note[a + 1].querySelector(".head p").innerHTML)
        console.log( note[a + 1].querySelector(".text p").innerHTML)
        console.log(a);
        
        exitPoppedContent()
        document.getElementById("addNewNote").innerHTML = "Add note";
        title.value = "";
        description.value = "";
      };
    })
    });
  });
}

deleteNote();
editNote();

