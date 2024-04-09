function update_price(select_id, set_price_id) {
  let select_span = document.getElementById(select_id);
  document.getElementById(set_price_id).textContent =
    parseInt(select_span.getAttribute("price")) * parseInt(select_span.value);
  let final_price = document.getElementById("total_price_value");
  let price_sum = 0;
  // sum the price of each element
  ["prix_boeuf", "prix_veau", "prix_biere"].forEach((element) => {
    price_sum += parseFloat(document.getElementById(element).textContent);
  });
  final_price.textContent = price_sum;
}

function send_order() {
  let final_price = parseFloat(
    document.getElementById("total_price_value").textContent
  );
  let boeuf_quantite = parseInt(document.getElementById("select_boeuf").value);
  let veau_quantite = parseInt(document.getElementById("select_veau").value);
  let biere_quantite = parseInt(document.getElementById("select_biere").value);
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let adress = document.getElementById("adress").value;
  if (final_price == 0) {
    Swal.fire({
      icon: "error",
      title: "Erreur",
      text: "Merci de choisir au moins 1 article à commander !",
    });
  }
  /* for (user_input of [name, surname, email, adress]) {
    if (user_input == "") {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Merci de remplir les champs manquants !",
      });
    }
  } */
}
