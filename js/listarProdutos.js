const apiURL = "http://localhost:8080/produtos"

const itemList = document.getElementById("body_list");

async function loadItems() {
    const response = await fetch(apiURL);
    const items = await response.json();

    items.forEach(element => {
        let format_validity = element.dt_validity.split("T");
        let format_manufacture = element.dt_manufacture.split("T");

        const row = `
            <tr>
                <td class="bottom_border">${element.id}</td>
                <td class="bottom_border">${element.name}</td>
                <td class="bottom_border">${element.supplier}</td>
                <td class="bottom_border">${format_validity[0]}</td>
                <td class="bottom_border">${format_manufacture[0]}</td>
                <td class="bottom_border">${element.amount}</td>
            </tr>
        `;
        itemList.innerHTML += row;
    });
}

loadItems();