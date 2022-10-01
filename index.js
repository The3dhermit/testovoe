const dataArray = [];

function addEntry() {

    sortEntryData();

    for (const entryD of dataArray) {

        const entry = document.createElement("div");
        const fistName = document.createElement("h4");
        const lastName = document.createElement("h4");
        const phone = document.createElement("h4");
        const button = document.createElement("button");
        button.innerHTML = "Remove";

        entry.append(lastName);
        entry.append(fistName);
        entry.append(button);

        fistName.textContent = entryD.fistName;
        lastName.textContent = entryD.lastName;
        phone.textContent = entryD.phone;
    
        document.querySelector('#entries-container').append(entry);
    }

    clearForm();

};

function clearForm() {

    document.querySelector('#phone').firstElementChild.value = '';
    document.querySelector('#last-name').firstElementChild.value = '';
    document.querySelector('#first-name').firstElementChild.value = '';
}

function sortEntryData () {
    const entryData = {
        lastName: document.querySelector('#last-name').firstElementChild.value,
        fistName: document.querySelector('#first-name').firstElementChild.value,
        phone: document.querySelector('#phone').firstElementChild.value
    }

    dataArray.push(entryData);
    dataArray.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
}