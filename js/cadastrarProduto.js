const apiURL = "http://localhost:8080/produtos"
const createProduct = document.getElementById("createProduct");

createProduct.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newProduct = {
        name: createProduct.new_name.value,
        supplier: createProduct.new_supplier.value,
        dt_validity: createProduct.dt_validate.value,
        dt_manufacture: createProduct.dt_manufacture.value,
        amount: parseInt(createProduct.new_amount.value),
    }

    await fetch (apiURL, {
        method : 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newProduct)
    });

    createProduct.reset();
})