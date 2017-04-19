const ELEMENTS = {
    name: document.forms.form.elements.name,
    hospital: document.form.elements.hospital,
    contacts: document.form.elements.contacts,
    bloodType: document.form.elements.bloodType,
    bloodQuntity: document.form.elements.bloodQuntity,
    additionalInfo: document.form.elements.additionalInfo
}

function getValue(obj) {
    var newObj = {};
    for (key in obj){
        newObj[key] = obj[key].value;
    }
    return newObj;
}

form.onsubmit = function() {
    var data = JSON.stringify( getValue(ELEMENTS) );
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'res.php', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(data);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {
                document.getElementById("results").innerHTML = xmlhttp.responseText; 
                console.log('Ok');
            } else {
                console.log('not Ok');
            }
        }
    };
}


