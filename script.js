const input = document.getElementById("input")
const list = document.getElementById("list")

function AddTask(){
     if(input.value === ""){
        alert("You must write a task.");
     }
     else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
     }
     input.value = "";
     SaveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
    }
,false);

function SaveData(){
    localStorage.setItem("data", list.innerHTML);
}

function LoadData(){
    list.innerHTML = localStorage.getItem("data");
}
LoadData();