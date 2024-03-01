const inputBox = document.getElementById("input-box");
const listContainer=document.getElementById('list-container');

//task adding function
const addTask = (task) => {
    if (task === '') {
        alert("You must write something");
    }
    else {
        const li = document.createElement('li')
        li.innerHTML = task;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7'
        li.appendChild(span);
    }
}

//adding task
document.getElementById("add").addEventListener('click', (e) => {
    addTask(inputBox.value)
    inputBox.value = ''
    saveData();
})

//adding checked and delete functionality
listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

//saving data to browser localstorage
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

//retreiving data from local storage
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTask();