const apiURL = "http://localhost:8080/produtos"

const itemList = document.getElementById("body_list");

async function loadItems() {
    const response = await fetch(apiURL);
    const items = await response.json();

    items.forEach(element => {
        const row = `
            <tr>
                <td class="bottom_border">${element.id}</td>
                <td class="bottom_border">${element.name}</td>
                <td class="bottom_border">${element.supplier}</td>
                <td class="bottom_border">${element.dt_validity}</td>
                <td class="bottom_border">${element.dt_manufacture}</td>
                <td class="bottom_border">${element.amount}</td>
            </tr>
        `;
        itemList.innerHTML += row;
    });
}

loadItems();