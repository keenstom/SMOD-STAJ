var employeeID = 2;
var table; 
var currentID;
const oneDay = 24 * 60 * 60 *1000
const currentDay = new Date();

function add() {

    table = document.getElementById("Employee");
    var button = document.createElement('button');
    
    var evet = document.createElement("button");
    var hayir = document.createElement("button");
    var label = document.createElement("label");

    button.innerHTML = "Delete";
    evet.innerHTML = "evet";
    hayir.innerHTML = "hayır";
    label.innerHTML = "Emin misin?";


    var row = table.insertRow(employeeID);
    var c0 = row.insertCell(0);
    var c1 = row.insertCell(1);
    var c2 = row.insertCell(2);
    var c3 = row.insertCell(3);
    var c4 = row.insertCell(4);
    var c5 = row.insertCell(5);


    c0.innerHTML = document.getElementById("taskname").value;
    c1.innerHTML = document.getElementById("tasktype").value;
    c2.innerHTML = document.getElementById("duedate").value;
    
    var dDate = new Date(document.getElementById("duedate").value)

    c4.appendChild(button);
    c5.appendChild(label);
    c5.appendChild(evet);
    c5.appendChild(hayir);

    const reDay = Math.round(Math.ceil((dDate.getTime() - currentDay.getTime()) / (oneDay)));

    c3.innerHTML = reDay;
   
    employeeID++;
    
    c5.setAttribute('id','verify');

    evet.setAttribute('onclick','this.closest("tr").remove(), employeeID--');
    hayir.setAttribute('onclick','this.closest("td").setAttribute("id","verify")');
    button.setAttribute('onclick','document.getElementById("verify").setAttribute("id","verify1")');

    
    
    
    

}
