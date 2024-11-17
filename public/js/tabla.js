setInterval(updateTable, 2000);
async function updateTable() {
        const resp = await fetch('/statusCarrito');
        const data = await resp.json();
    const table = document.querySelector('table');
    table.innerHTML = `
        <tr>
            <td>id</td>
            <td>Status</td>
            <td>Ip</td>
            <td>Name</td>
            <td>Date</td>
            <td>Id Device</td>
        </tr>
    `;
    data.forEach(elemento => {
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = elemento.id;
        newRow.insertCell(1).innerText = elemento.status;
        newRow.insertCell(2).innerText = elemento.ip_client;
        newRow.insertCell(3).innerText = elemento.name;
        newRow.insertCell(4).innerText = elemento.date;
        newRow.insertCell(5).innerText = elemento.id_device;
    });
}