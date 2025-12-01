function submit() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("contact-number").value;
    const date = document.getElementById("date").value;
    const size = document.getElementById("size").value;
    const flavour = document.getElementById("flavour").value;
    const qtyHawaiian = document.getElementById("qty-hawaiian").value;
    const qtyPepperoni = document.getElementById("qty-pepperoni").value;
    const qtyVegetable = document.getElementById("qty-vegetable").value;
    const card = document.getElementById("card").value;
    const pin = document.getElementById("pin").value;
    const note = document.getElementById("note").value;

    alert("Order Recived");
    console.log("Kitchen: ");
    console.log("flavour: ",flavour," qtyHawaiian: ",qtyHawaiian," qtyPepperoni: ",qtyPepperoni," qtyVegetable: ",qtyVegetable," note: ",note);
    
    
    
}