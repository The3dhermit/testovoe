import './style.css'

var dataArray = [{
    id: "plug",
    lastName: "Doe",
    fistName: "John",
    phone: "+380934272152"
}];

var submitCheck = false;

const uuid = require('uuid')

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    if (submitCheck) {
        addEntry();
    }
    else {
        event.preventDefault();
    }
}
);

var regNameCheck = /^[a-zA-Z]+$/;

var lNameErrorM = document.getElementById("lName");
var fNameErrorM = document.getElementById('fName');
var phoneErrorM = document.getElementById("phoneEM");

lNameErrorM.style.display = "none";
fNameErrorM.style.display = "none";
phoneErrorM.style.display = "none";

nameInputCheck(document.getElementById('first-name'), fNameErrorM);
nameInputCheck(document.getElementById('last-name'), lNameErrorM);
phoneInputCheck(document.getElementById('phone'), phoneErrorM);

reRender();

function addEntry() {


    sortEntryData();

    reRender();

    clearForm();

};

function nameInputCheck(inputField, errorMessege) {

    inputField.addEventListener("input", () => {
        if (inputField.value && inputField.value[0] === ' ') {
            errorMessege.style.display = "flex";
            errorMessege.textContent = "This field can't start with space.";
            submitCheck = false;
        }
        else if (inputField.value && !regNameCheck.test(inputField.value)
        ) {
            errorMessege.style.display = "flex";
            errorMessege.textContent = "Only latin characters";
            submitCheck = false;
        }
        else {
            errorMessege.style.display = "none";
            submitCheck = true;
        }
    });
}

function phoneInputCheck(inputField, errorMessege) {

    inputField.addEventListener("input", () => {
        if (inputField.value && !/\+380/.test(inputField.value)) {
            errorMessege.style.display = "flex";
            errorMessege.textContent = "Number must start with +380";
            submitCheck = false;
        }
        else if (inputField.value && !/[0-9]{12}/.test(inputField.value)
        ) {
            errorMessege.style.display = "flex";
            errorMessege.textContent = "Enter full number";
            submitCheck = false;
        }
        else if (inputField.value.length > 13) {
            errorMessege.style.display = "flex";
            errorMessege.textContent = "Number is too long";
            submitCheck = false;
        }
        else {
            errorMessege.style.display = "none";
            submitCheck = true;
        }
    });
}

function reRender() {

    const conteiner = document.querySelector('#entries-container');

    conteiner.innerHTML = '';

    for (const entryD of dataArray) {

        const entry = document.createElement("div");
        entry.classList.add("book_entry")
        const fistName = document.createElement("h4");
        const lastName = document.createElement("h4");
        const phone = document.createElement("h4");
        const button = document.createElement("button");
        button.className = "button";
        button.innerHTML = "Remove";

        entry.append(lastName);
        entry.append(fistName);
        entry.append(phone);
        entry.append(button);

        fistName.textContent = entryD.fistName;
        lastName.textContent = entryD.lastName;
        phone.textContent = entryD.phone;

        button.addEventListener('click', () => {
            if (entryD.id !== "plug") {
                dataArray = dataArray.filter(x => x.id !== entryD.id);
                reRender();
            }
        });

        conteiner.append(entry);
        console.log(dataArray);
    }
}

function clearForm() {

    form.reset();
}

function sortEntryData() {

    console.log('sert entry data');
    console.log('dataArray');


    const entryData = {
        id: uuid.v4(),
        lastName: document.querySelector('#last-name').value,
        fistName: document.querySelector('#first-name').value,
        phone: document.querySelector('#phone').value
    }

    dataArray.push(entryData);
    dataArray.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
}
