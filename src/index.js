import './style.css'

var dataArray = [{
    id: "plug",
    lastName: "Doe",
    fistName: "John",
    phone: "+380934272152"
}];

const uuid = require('uuid')

const form = document.querySelector('form')

form.addEventListener('submit', addEntry);

reRender();

function addEntry() {


    sortEntryData();

    reRender();

    clearForm();

};

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
        button.innerHTML = "Remove";

        entry.append(lastName);
        entry.append(fistName);
        entry.append(phone);
        entry.append(button);

        fistName.textContent = entryD.fistName;
        lastName.textContent = entryD.lastName;
        phone.textContent = entryD.phone;

        button.addEventListener('click', () => {
            console.log("remove event");
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
