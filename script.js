let employeeCount = 0;

function addEmployee(){

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const role = document.getElementById("role").value;

    if(name === "" || department === "" || role === ""){
        alert("Please fill all fields");
        return;
    }

    employeeCount++;

    document.getElementById("totalEmployees").innerText = employeeCount;

    const table = document.getElementById("employeeTable");

    const row = table.insertRow();

    row.innerHTML = `
        <td>${employeeCount}</td>
        <td>${name}</td>
        <td>${department}</td>
        <td>${role}</td>
        <td class="status">Active</td>
        <td>
            <button class="delete-btn" onclick="deleteEmployee(this)">
                Delete
            </button>
        </td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("role").value = "";
}

function deleteEmployee(button){

    const row = button.parentElement.parentElement;

    row.remove();

    employeeCount--;

    document.getElementById("totalEmployees").innerText = employeeCount;
}