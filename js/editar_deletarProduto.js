const apiURL = "http://localhost:8080/produtos";

const formId = document.getElementById("buscarUm");
const formEdit = document.getElementById("editProduct");
const input = document.getElementById("input");
const buscar = document.getElementById("buscar");


async function loadOneProduct(id) {
    const response = await fetch(`${apiURL}/${id}`);
    const product = await response.json();

    if (!response.ok) {
        window.alert("ERRO: " + product.message);
    }
    else {
        buscar.style.display = "none";
        input.style.display = "block";

        formEdit.edit_name.value = product.name;
        formEdit.edit_supplier.value = product.supplier;
        formEdit.edit_dt_validity.value = product.dt_validity.split("T")[0];
        formEdit.edit_dt_manufacture.value = product.dt_manufacture.split("T")[0];
        formEdit.edit_amount.value = parseInt(product.amount);
    }
}

formId.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = formId.id_product.value;
    if (id) {
        loadOneProduct(id);
    }
    else {
        window.alert("Insira um valor");
    }
});


formEdit.addEventListener("submit", async (event) => {
    event.preventDefault();

    const udpateProduct = {
        id: formId.id_product.value,
        name: formEdit.edit_name.value,
        supplier: formEdit.edit_supplier.value,
        dt_validity : formEdit.edit_dt_validity.value,
        dt_manufacture : formEdit.edit_dt_manufacture.value,
        amount : parseInt(formEdit.edit_amount.value)
    }

    await fetch (apiURL, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(udpateProduct)
    });

    buscar.style.display = "block";
    input.style.display = "none";

    formId.reset();
});
