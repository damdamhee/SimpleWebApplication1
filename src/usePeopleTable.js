function addTableItemRow(person) {
    let newItemRow = document.createElement('tr');
    newItemRow.style.height = "40px"
    for (let col of Object.keys(person)) {
        let item = document.createElement('td');
        let inputElement = document.createElement('input');
        inputElement.value = person[col];
        item.appendChild(inputElement);
        newItemRow.appendChild(item);
    }
    peopleTable.appendChild(newItemRow);
}

function renderTableHeader() {
    let headerRow = document.createElement("tr");
    headerRow.style.height = "40px"
    for (let header of tableHeaders) {
        let headerCol = document.createElement('th');
        headerCol.innerText = header;
        headerRow.appendChild(headerCol);
    }
    peopleTable.appendChild(headerRow);
}
function renderTableItems() {
    for (let person of listOfPeople) {
        addTableItemRow(person);
    }
}

var tableHeaders = ["Name", "Phone No.", "Address"];
var listOfPeople = [
    { name: 'JJH', phno: '010-1234-5678', addr: 'suwon' },
    { name: 'JHJ', phno: '010-0987-6543', addr: 'suwon' }
];
var peopleTable = document.createElement('table');
renderTableHeader();
renderTableItems();


export function usePeopleTable() {
    peopleTable = document.createElement('table');
    renderTableHeader();
    renderTableItems();
    return peopleTable;
}

export function useAddPersonBtn() {
    const addPersonBtn = document.createElement('button');
    addPersonBtn.innerText = "ADD"
    addPersonBtn.setAttribute('id', 'addUserBtn');
    addPersonBtn.style.width = "120px";
    addPersonBtn.style.height = "40px";
    addPersonBtn.style.color = "white";
    addPersonBtn.style.backgroundColor = "#55ACED";
    addPersonBtn.style.border = "none";
    addPersonBtn.padding = "15px 30px";
    addPersonBtn.fontSize = "20px";
    addPersonBtn.cursor = "pointer";
    addPersonBtn.addEventListener('click', function () {
        let newPerson = { name: "", phno: "", addr: "" }
        listOfPeople.push(newPerson);
        addTableItemRow(newPerson);
    })
    return addPersonBtn;
}
