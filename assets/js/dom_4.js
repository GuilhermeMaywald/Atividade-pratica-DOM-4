let btnPress = document.getElementById('btn_save');
let elementName_1 = document.getElementById('name_1');
let elementName_2 = document.getElementById('name_2');
let elementName_3 = document.getElementById('name_3');
let elementFeedback = document.getElementById('feedback');
let listElement = document.getElementById('list_names');

function validNames (name) {
    if (name != '') {
        return true;
    }
    return false;
}

function displayMessage(message){
    elementFeedback.innerHTML = message;
    elementFeedback.removeAttribute('hidden');
}

btnPress.onclick = () => {
    let valueName_1 = elementName_1.value;
    let valueName_2 = elementName_2.value;
    let valueName_3 = elementName_3.value;
    let validName_1 = validNames(valueName_1);
    let validName_2 = validNames(valueName_2);
    let validName_3 = validNames(valueName_3);
    if(validName_1 && validName_2 && validName_3) {
        displayMessage('Nomes preenchidos com sucesso!');
        listElement.innerHTML += `<li>Nome1: ${valueName_1}</li> <li>Nome2: ${valueName_2}</li> <li>Nome3: ${valueName_3}</li>`;
    } else {
        displayMessage('Nome não preenchido');
    }
}