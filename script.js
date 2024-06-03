
function salary(){
    let name = document.getElementById('name1').value;
    let role_1 =document.getElementById('role2').value;
    let salary_2 =document.getElementById('s2').value;

    let table = "<table border=white>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Empolyee role:</td><td>" + role_1 + "</td></tr>";
    table += "<tr><td>Employee Salary:</td><td>" + salary_2 + "</td></tr>";
    table += "</table>";

    
    document.getElementById("role").innerHTML = table;
}
