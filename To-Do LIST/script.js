let inputBox = document.querySelector(".input-box");
let listContainer = document.querySelector("#list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("Enter Your Task")
    } else {
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        list.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false);

