//data
var tableHeaders = ["Name", "Phone No.", "Address"];
var listOfPeople = [
                     {name:'JJH',phno:'010-1234-5678', addr:'suwon'},
                     {name:'JHJ', phno:'010-0987-6543', addr:'suwon'}
                    ];

//doms
const entryDiv = document.getElementById('main');

const header = document.createElement('h1');
header.innerText = "List of people in DST"

const divider = document.createElement('div');
divider.style.height="30px";

const peopleTable = document.createElement('table');
function addTableItemRow(person){
    let newItemRow = document.createElement('tr');
    newItemRow.style.height="40px"
    for(let col of Object.keys(person)){
        let item = document.createElement('td');
        let inputElement = document.createElement('input');
        inputElement.value = person[col];
        item.appendChild(inputElement);
        newItemRow.appendChild(item);
    } 
    peopleTable.appendChild(newItemRow);
}
function renderTableHeader(){
    let headerRow = document.createElement("tr");
    headerRow.style.height="40px"
    for(let header of tableHeaders){
        let headerCol = document.createElement('th');
        headerCol.innerText = header;
        headerRow.appendChild(headerCol);
    }
    peopleTable.appendChild(headerRow);
}
function renderTableItems(){
    for(let person of listOfPeople){
        addTableItemRow(person);
    }
}

entryDiv.appendChild(header);
entryDiv.appendChild(divider);
entryDiv.appendChild(peopleTable);

renderTableHeader();
renderTableItems();
