import './style.css'

var dataArray = [];
var id;

const uuid = require('uuid')

const form = document.querySelector('form')

form.addEventListener('submit', addEntry);
console.log("dwqdqw");


function addEntry() {


    sortEntryData();

    reRender();

    clearForm();

};

function reRender() {

    const conteiner = document.querySelector('#entries-container');
    while (conteiner.childElementCount > 1) {
        conteiner.removeChild(conteiner.lastChild);
    };

    for (const entryD of dataArray) {

        const entry = document.createElement("div");
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
            dataArray = dataArray.filter(x => x.id !== id);
            reRender();
        });

        conteiner.append(entry);
        console.log(dataArray);
    }
    var content = conteiner.innerHTML;
    conteiner.innerHTML = content;

}

function clearForm() {

    form.reset();
}

function sortEntryData() {

    console.log('sert entry data');
    console.log('dataArray');
    id = uuid.v4();


    const entryData = {
        id: id,
        lastName: document.querySelector('#last-name').value,
        fistName: document.querySelector('#first-name').value,
        phone: document.querySelector('#phone').value
    }

    dataArray.push(entryData);
    dataArray.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

}
