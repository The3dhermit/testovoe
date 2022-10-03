const uuid = require('uuid')
var dataArray = [];

const form = document.querySelector('form')

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
            dataArray = dataArray.filter(x => x.lastName !== lastName.textContent);
            reRender();
        });

        conteiner.append(entry);
    }
}

function clearForm() {

    document.querySelector('form').reset();
}

function sortEntryData() {

    
    console.log('sert entry data')
    const entryData = {
        id: uuid.v4(),
        lastName: document.querySelector('#last-name').value,
        fistName: document.querySelector('#first-name').value,
        phone: document.querySelector('#phone').value
    }

    dataArray.push(entryData);
    dataArray.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
}
