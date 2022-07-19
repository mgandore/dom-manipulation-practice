/*	TASK 1
	Avem 2 inputuri de tip text intr-un formular care reprezinta numele si prenumele. 
	Sa se afiseze cu ajutorul unui alert un mesaj de salut.
*/
function greet() {
	alert(`Hello ${nume.value} ${prenume.value}. How are you today`);
}


/*	TASK 2
	Avem un dropdown cu 3 optiuni. 
	Cu ajutorul unui buton sa se stearga optiunea selectata din dropdown.
*/
function deleteOp() {
	const dropdown = document.querySelector('#dropdown');
	dropdown.remove(dropdown.selectedIndex);
}


/*	TASK 3
	Avem un element de tip <input> pentru a introduce un numar ce reprezinta 
	raza unei sfere. Sa se afiseze volumul corespunzator razei.
*/
function getVolume() {
	let volume = 4 / 3 * Math.PI * Math.pow(radius.value, 3);
	result.textContent += volume;
}


/*	TASK 4
	Sa se faca highlight (cu culoarea orange) pe cuvintele cu stilul bold cand se face hover pe text. 
	Altfel, revine la stilul initial (adica bold).
*/
let boldWords = [];
window.onload = function () {
	boldWords = document.getElementsByTagName('b');
}

function setStyleOnBoldWords(backgroundColor, fontWeight) {
	for (let word of boldWords) {
		word.style.backgroundColor = backgroundColor;
		word.style.fontWeight = fontWeight;
	}
}

function hightlight() {
	setStyleOnBoldWords('orange', 100);
}

function reset() {
	setStyleOnBoldWords('white', 700);
}


/*	TASK 5
	Avem un array de denumiri de fructe.
	 Afisati fructele intr-o lista neordonata.
*/
function displayList() {
	let fruits = ['apple', 'peach', 'cherry']
	let list = document.getElementsByTagName('ul');
	for (let fruit of fruits) {
		let listItem = document.createElement('li');
		let fruitName = document.createTextNode(fruit);
		listItem.appendChild(fruitName);
		list[0].appendChild(listItem);
	}
}


/*	TASK 6
	Sa se schimbe culoarea backgroundului cu ajutorul unui color picker.
*/
function setColor() {
	let colorPicker = document.getElementById('colorpicker');
	document.body.style.backgroundColor = colorPicker.value;
}


/*	TASK 7
	Sa se adauge un rand nou la fiecare click de buton intr-un tabel cu 2 coloane: 
	id si name. Name-ul va fi extras dintr-un input. Id-ul incepe de la 1.
*/
let userId = 1;

function addUser() {
	let usersTable = document.querySelector('#users');
	let newRow = document.createElement('tr');

	let idCell = document.createElement('th');
	let idCellNode = document.createTextNode(userId)
	idCell.appendChild(idCellNode);
	newRow.appendChild(idCell);

	let usernameCell = document.createElement('th');
	let usernameCellNode = document.createTextNode(username.value);
	usernameCell.appendChild(usernameCellNode);
	newRow.appendChild(usernameCell);

	usersTable.appendChild(newRow);
	userId++;
}

function deleteUser() {
	let usersTable = document.querySelector('#users');
	usersTable.rows[usersTable.rows.length - 1].remove();
}