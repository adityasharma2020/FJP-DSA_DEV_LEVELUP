const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");

let isModalPresent  = false;

addBtn.addEventListener("click", function(){
    if(!isModalPresent){
        modalCont.style.display = "flex";
    }else{
        modalCont.style.display = "none";

    }
    isModalPresent = !isModalPresent;
})

const allPriorityColors = document.querySelectorAll(".priority-color");

allPriorityColors.forEach(function(ColorElement){
    ColorElement.addEventListener("click",function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        ColorElement.classList.add("active");
    });
})

