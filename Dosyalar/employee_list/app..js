var employeeID = 2;
var table; 
var currentID;
function add() {

    table = document.getElementById("Employee");
    var button = document.createElement('button');
    
    
    button.innerHTML = "Delete Employee";
    var row = table.insertRow(employeeID);
    var c0 = row.insertCell(0);
    var c1 = row.insertCell(1);
    var c2 = row.insertCell(2);
    var c3 = row.insertCell(3);
    c0.innerHTML = document.getElementById("fname").value;
    c1.innerHTML = document.getElementById("lname").value;
    c2.innerHTML = document.getElementById("points").value;

    c3.appendChild(button);
    


   
    employeeID++;


    button.setAttribute('onclick','this.closest("tr").remove(), employeeID--');

}

