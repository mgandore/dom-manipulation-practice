///////    task 1    //////
function greet() {
    alert(`Hello ${nume.value} ${prenume.value}. How are you today`);
}


////////    task 2    ////////
function deleteOp() {
    let toDelete = dropdown.value;
    //console.log(toDelete);

    let allOptions = document.querySelectorAll('option');
    //console.log(allOptions);
    for(let item of allOptions) {
       //console.log(item.value);
       if (toDelete === item.value) {
        item.remove();
       } 
    }
}


////////      task 3      //////////
function getVolume() {
    console.log(radius.value);
    let volume = 4 / 3 * Math.PI * Math.pow(radius.value,3);
    result.textContent += volume;
}


//////    task 4    ///////////
//window.onload();
let boldWords = [ ];

window.onload = function() {
    boldWords = document.getElementsByTagName('b');
}

function hightlight() {
    
    for (let word of boldWords) {
        //console.log(word.innerText);
        word.style.backgroundColor = 'orange';
        word.style.fontWeight = 100;
    }
}

function reset() {
    //console.log(boltWords)
    for (let word of boldWords) {
        //console.log(word.innerText)
        word.style.backgroundColor = 'white';
        word.style.fontWeight = 700;
    }
}


///////     task 5     //////////////
function displayList() {
    let fruits = ['apple', 'peach', 'cherry']
    let list = document.getElementsByTagName('ul');
    //console.log(list);
    for (let fruit of fruits) {
        let listItem = document.createElement('li');
        let fruitName = document.createTextNode(fruit);
        listItem.appendChild(fruitName);
        list[0].appendChild(listItem);
         
    }
    //console.log(list[0]);
}


////////      task 6      ///////////////
function setColor() {
    let colorPicker = document.getElementById('colorpicker');
    document.body.style.backgroundColor = colorPicker.value;
}


/////////   task 7    ///////////////////
let userId = 1;

function addUser() {
    let usersTable = document.querySelector('#users');
    //console.log(usersTable);
    let newRow = document.createElement('tr');
    
    let idCell = document.createElement('th');
    let idCellNode = document.createTextNode(userId)
    idCell.appendChild(idCellNode);
    newRow.appendChild(idCell);
    //console.log(newRow);

    let usernameCell = document.createElement('th');
    let usernameCellNode = document.createTextNode(username.value);
    usernameCell.appendChild(usernameCellNode);
    newRow.appendChild(usernameCell);
    //console.log(newRow)

    usersTable.appendChild(newRow);
    userId++;
}

function deleteUser() {
    let usersTable = document.querySelector('#users');
    usersTable.rows[usersTable.rows.length - 1].remove();
}