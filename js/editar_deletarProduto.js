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